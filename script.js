const imageInput = document.getElementById("imageInput");
const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const promptType = document.getElementById("promptType");

let imageInfo = null;

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = () => {
    imageInfo = {
      name: file.name,
      width: img.width,
      height: img.height
    };
  };
  img.src = URL.createObjectURL(file);
});

btn.addEventListener("click", () => {
  if (!imageInfo) {
    alert("Upload gambar dulu!");
    return;
  }

  const type = promptType.value;
  let prompt = "";

  if (type === "realistic") {
    prompt = `
Create a photorealistic image based on this reference:

Image info:
- Resolution: ${imageInfo.width}x${imageInfo.height}

Style:
- Ultra realistic
- Natural lighting
- High detail
- DSLR quality
- Soft shadows

Add cinematic color grading and depth of field.
`;
  }

  if (type === "anime") {
    prompt = `
Create an anime-style illustration based on this image:

Resolution: ${imageInfo.width}x${imageInfo.height}

Style:
- Japanese anime
- Clean line art
- Soft pastel color
- Studio Ghibli / Makoto Shinkai vibe
- High detail eyes and lighting
`;
  }

  if (type === "logo") {
    prompt = `
Design a modern logo inspired by this image:

Resolution: ${imageInfo.width}x${imageInfo.height}

Style:
- Minimalist
- Flat design
- Clean typography
- Suitable for brand identity
- Vector style
`;
  }

  if (type === "poster") {
    prompt = `
Create a cinematic poster inspired by this image:

Resolution: ${imageInfo.width}x${imageInfo.height}

Style:
- Dramatic lighting
- Bold typography space
- Movie poster layout
- High contrast color grading
`;
  }

  if (type === "wallpaper") {
    prompt = `
Create a high quality wallpaper based on this image:

Resolution: ${imageInfo.width}x${imageInfo.height}

Style:
- Ultra HD
- Clean composition
- Perfect for desktop & mobile
- Aesthetic color tone
`;
  }

  result.value = prompt.trim();
});
