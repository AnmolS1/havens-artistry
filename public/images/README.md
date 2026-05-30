# 🌿 Drop your photos here

This folder is where your real product & studio photos live. Drop image files
into the matching subfolder using the **exact filenames** below, then tell me
(or edit `lib/images.js`) and the decorative placeholder will be swapped for
your photo automatically — framed with the same rounded corners, border, and
little sprig.

Until a file is added, the page keeps showing the striped placeholder, so the
site always looks finished.

## Recommended specs
- **Format:** `.jpg` (photos) or `.png` (artwork/stickers with transparency)
- **Square images** (collections tiles, products, Instagram): ~1000×1000px
- **Portrait** (maker photo): ~1000×1250px (4:5)
- Keep each file under ~500KB if you can — they ship as-is (static export).

> You can use a different extension (e.g. `.png`/`.webp`) — just make sure the
> path in `lib/images.js` matches what you uploaded.

---

## Folders & filenames

### `collections/` — collection cards (home + Collections page)
```
stickers.jpg   earrings.jpg   rings.jpg   bracelets.jpg   necklaces.jpg
wire-animals.jpg
```

### `products/` — Shop All cards (filename = product id)
```
sticker-01.jpg   sticker-02.jpg   sticker-pack.jpg
earrings-01.jpg  earrings-02.jpg  earrings-03.jpg
ring-01.jpg      ring-02.jpg      ring-03.jpg
bracelet-01.jpg  bracelet-02.jpg  bracelet-03.jpg
necklace-01.jpg  necklace-02.jpg  necklace-03.jpg  necklace-04.jpg
```

### `instagram/` — home "Follow along" strip
```
1.jpg  2.jpg  3.jpg  4.jpg  5.jpg  6.jpg
```

### `about/` — maker portrait & custom-work photo
```
portrait.jpg       (About page + home "Meet the Maker" teaser)
custom-work.jpg    (Custom Order page intro)
```

---

## How the swap works
`lib/images.js` is the single manifest. Each entry is `null` by default (= show
placeholder). Set it to the path of your uploaded file, e.g.:

```js
collection: {
  stickers: '/images/collections/stickers.jpg',
  ...
}
```

Paths are root-relative; the configured `basePath` (for GitHub Pages project
sites) is applied automatically.
