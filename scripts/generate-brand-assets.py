"""Generate favicon, app icons and the social share image.

Usage: python scripts/generate-brand-assets.py
Requires Pillow and `npm install` (uses the Inter variable font from
@fontsource-variable/inter). Development tool only.
"""
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
FONT = os.path.join(ROOT, "node_modules", "@fontsource-variable", "inter", "files", "inter-latin-wght-normal.woff2")

BRAND_500 = (91, 103, 236)
BRAND_700 = (57, 64, 192)
INK = (16, 24, 40)
MUTED = (93, 102, 121)
WARM = (251, 250, 248)
LINE = (231, 229, 224)


def font(size, weight):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([weight])
    return f


def gradient_square(size, radius):
    grad = Image.new("RGB", (size, size))
    px = grad.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            px[x, y] = tuple(round(BRAND_500[i] + (BRAND_700[i] - BRAND_500[i]) * t) for i in range(3))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(grad, (0, 0), mask)
    return out


def monogram(size, radius_ratio=0.22):
    img = gradient_square(size, round(size * radius_ratio))
    d = ImageDraw.Draw(img)
    f = font(round(size * 0.42), 700)
    d.text((size / 2, size / 2 + size * 0.01), "FN", font=f, fill="white", anchor="mm")
    return img


# Icons
monogram(180, 0.0).convert("RGB").save(os.path.join(PUBLIC, "apple-touch-icon.png"))
monogram(192).save(os.path.join(PUBLIC, "icon-192.png"))
monogram(512).save(os.path.join(PUBLIC, "icon-512.png"))
monogram(256).save(os.path.join(PUBLIC, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])

# Social share image (1200x630)
W, H = 1200, 630
og = Image.new("RGB", (W, H), WARM)
d = ImageDraw.Draw(og)
# Soft brand glow: a solid colour pasted through a blurred mask (blurring RGBA
# directly would blend in transparent black and grey the background).
glow_mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(glow_mask).ellipse((640, -280, 1440, 400), fill=255)
og.paste(Image.new("RGB", (W, H), (224, 230, 255)), (0, 0), glow_mask.filter(ImageFilter.GaussianBlur(110)))

og.paste(monogram(72), (72, 72), monogram(72))
d.text((160, 86), "Faisal Nadaf", font=font(30, 650), fill=INK)
d.text((160, 124), "Belagavi (Belgaum), India", font=font(20, 450), fill=MUTED)

headline = ["Your virtual developer", "for websites, web apps", "and AI products"]
y = 214
for line in headline:
    d.text((72, y), line, font=font(48, 650), fill=INK)
    y += 58
d.text((72, y + 24), "Ongoing remote development or freelance projects.", font=font(22, 450), fill=MUTED)
d.text((72, y + 58), "React · Next.js · Node.js · Flutter · Gemini", font=font(21, 550), fill=BRAND_700)

shot = Image.open(os.path.join(PUBLIC, "images", "clients", "school-excellence-program-720.webp")).convert("RGB")
frame_w = 440
shot = shot.resize((frame_w, round(shot.height * frame_w / shot.width)), Image.LANCZOS)
fx, fy = 690, 160
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(shadow).rounded_rectangle((fx + 10, fy + 30, fx + frame_w + 10, fy + 26 + shot.height + 40), 16, fill=(31, 41, 92, 70))
shadow = shadow.filter(ImageFilter.GaussianBlur(22))
og.paste(shadow, (0, 0), shadow)
d = ImageDraw.Draw(og)
d.rounded_rectangle((fx - 1, fy - 1, fx + frame_w + 1, fy + 26 + shot.height + 1), 12, fill="white", outline=LINE)
for i, c in enumerate([(248, 113, 113), (251, 191, 36), (52, 211, 153)]):
    d.ellipse((fx + 12 + i * 14, fy + 9, fx + 20 + i * 14, fy + 17), fill=c)
og.paste(shot, (fx, fy + 26))
d.text((fx, fy + 26 + shot.height + 18), "Client work: School Excellence Program", font=font(18, 500), fill=MUTED)

og.save(os.path.join(PUBLIC, "og-image.png"), optimize=True)

with open(os.path.join(PUBLIC, "favicon.svg"), "w", encoding="utf-8") as fh:
    fh.write(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
        '<stop offset="0" stop-color="#5B67EC"/><stop offset="1" stop-color="#3940C0"/></linearGradient></defs>'
        '<rect width="64" height="64" rx="14" fill="url(#g)"/>'
        '<text x="32" y="41.5" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" '
        'font-size="27" font-weight="700" fill="#fff">FN</text></svg>'
    )

print("Generated icons, favicon.svg and og-image.png")
