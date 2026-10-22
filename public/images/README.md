# Portrait asset

Place your original portrait here as `pratik-yadav.jpeg`.

The supplied path was not present in the workspace during implementation. No substitute photo or fabricated transparent cutout has been added. Until the JPEG is supplied, both portrait frames show the existing cloud illustration without a broken image icon.

The shared URL is set in `src/data.js`. Hero framing uses object-fit: contain, preserving the entire original photo and its aspect ratio. About uses object-fit: cover with top alignment, which crops the lower part of a portrait-oriented photo. The 640 x 800 image attributes reserve a stable layout box; they are not a claim about the unavailable original file's intrinsic dimensions. Once the file is available, inspect both crops and optionally update those attributes to its real pixel dimensions while retaining the CSS frame ratios.
