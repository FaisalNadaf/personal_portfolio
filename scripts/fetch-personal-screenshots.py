"""Download the personal-project screenshots referenced by the old portfolio data
(the owner's own Cloudinary uploads) and store them locally as WebP.

Usage: python scripts/fetch-personal-screenshots.py
Writes public/images/personal/<slug>-960.webp and <slug>-480.webp.
Requires Pillow. Development tool only.
"""
import io
import os
import urllib.request
from PIL import Image

BASE = "https://res.cloudinary.com/dcacqhspd/image/upload/"
SOURCES = {
    "social-media-mern": "v1734541734/Portfolio/projects/zvfggdqfnlncvmq6pwb1.png",
    "school-management": "v1734716582/Portfolio/projects/utsy1pfjk0wfqap0thol.png",
    "hotel-booking": "v1734769845/Portfolio/projects/gxzrz5pe2uxfgt69pjhx.png",
    "ecommerce-flutter": "v1750239409/Portfolio/projects/wqqpnikglzbuemfxnrj5.jpg",
    "online-code-editor": "v1750239430/Portfolio/projects/zabkfrzinipdxr33ixva.png",
    "blinkit-clone-flutter": "v1750239710/Portfolio/projects/hg1co88kobp6wmh0zhf6.jpg",
    "mern-chat-app": "v1734770011/Portfolio/projects/j0wvq0m4m5djpma4ct9w.png",
    "expense-tracker": "v1734770951/Portfolio/projects/ppm04tiqnpsiheppxoxc.png",
    "youtube-clone": "v1734771075/Portfolio/projects/ibkmh5gonqajaoi4k2xr.png",
    "weather-app": "v1734771321/Portfolio/projects/kawzrhpykckggdokucyp.png",
}

out = os.path.join("public", "images", "personal")
os.makedirs(out, exist_ok=True)
for slug, path in SOURCES.items():
    try:
        with urllib.request.urlopen(BASE + path, timeout=60) as resp:
            data = resp.read()
        im = Image.open(io.BytesIO(data)).convert("RGB")
        for width in (960, 480):
            w = min(width, im.width)
            resized = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            dest = os.path.join(out, f"{slug}-{width}.webp")
            resized.save(dest, "WEBP", quality=80, method=6)
        print("ok", slug, im.size)
    except Exception as e:  # noqa: BLE001
        print("FAIL", slug, e)
