"""Convert captured client homepage screenshots (PNG, 1440x1000) to WebP.

Usage: python scripts/optimize-client-screenshots.py [captureDir] [outDir]
Reads <captureDir>/<project-id>.png and writes <outDir>/<project-id>-1440.webp
and <project-id>-720.webp. Requires Pillow. Development tool only.
"""
import os
import sys
from PIL import Image

src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(".screenshots", "clients")
out = sys.argv[2] if len(sys.argv) > 2 else os.path.join("public", "images", "clients")
os.makedirs(out, exist_ok=True)

for name in sorted(os.listdir(src)):
    if not name.endswith(".png"):
        continue
    project_id = name[:-4]
    im = Image.open(os.path.join(src, name)).convert("RGB")
    for width in (1440, 720):
        resized = im if im.width == width else im.resize(
            (width, round(im.height * width / im.width)), Image.LANCZOS
        )
        dest = os.path.join(out, f"{project_id}-{width}.webp")
        resized.save(dest, "WEBP", quality=80, method=6)
        print(dest, resized.size, os.path.getsize(dest) // 1024, "KB")
