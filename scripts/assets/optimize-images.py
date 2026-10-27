"""Create WebP delivery assets without changing original uploads. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageOps
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "public/images"
DEST = SOURCE / "optimized"
DEST.mkdir(exist_ok=True)
mapping = {}
before = after = 0
for source in sorted(SOURCE.iterdir()):
    if not source.is_file() or source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    filename = re.sub(r"[^a-z0-9]+", "-", source.stem.lower()).strip("-")[:75]
    filename += "-" + hashlib.sha1(source.name.encode()).hexdigest()[:6] + ".webp"
    target = DEST / filename
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGBA" if "A" in original.getbands() else "RGB")
        image.thumbnail((1920, 1920) if source.name == "lagos-waterfront.jpg" else (1600, 1600), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    # Do not trade a smaller original for a larger encoding.
    if target.stat().st_size < source.stat().st_size:
        mapping["/images/" + source.name] = "/images/optimized/" + filename
        before += source.stat().st_size
        after += target.stat().st_size
    else:
        target.unlink()

# Hand-selected framing keeps heads at a similar scale across the directory.
widths = {"David Saro": .60, "Murtala Sule": .62, "Naledi Dlamini": .66,
          "Abdullahi Kurfi": .62, "Goni Bukar": .62, "Obinna Ezeh": .62,
          "Aisha Alhassan": .66, "Emeka Anyanwu": .65, "Ovie Ejiro": .74}
portrait_dir = DEST / "portraits"
portrait_dir.mkdir(exist_ok=True)
portraits = {}
for name, filename in re.findall(r'"([^"]+)": \{ file: "([^"]+)"', (ROOT / "data/portraits.js").read_text(encoding="utf-8-sig")):
    with Image.open(SOURCE / filename) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        width, height = image.size
        crop_width = min(width * widths.get(name, .80), height * .8)
        crop_height = crop_width * 1.25
        left = (width - crop_width) / 2
        top = min(height * .015, height - crop_height)
        image = image.crop((round(left), round(top), round(left + crop_width), round(top + crop_height)))
        image.thumbnail((960, 1200), Image.Resampling.LANCZOS)
        target = portrait_dir / (re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") + ".webp")
        image.save(target, "WEBP", quality=85, method=6)
        portraits[name] = "/images/optimized/portraits/" + target.name

(ROOT / "data/optimized-images.json").write_text(json.dumps(mapping, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
(ROOT / "data/portrait-images.json").write_text(json.dumps(portraits, indent=2) + "\n", encoding="utf-8")
print(json.dumps({"images": len(mapping), "original_bytes": before, "delivery_bytes": after, "reduction_percent": round((1 - after / before) * 100, 1), "portraits": len(portraits)}))
