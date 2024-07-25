const images = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

const processedImages = {};
for (const path in images) {
  const fileName = path.replace('./', '');
  processedImages[fileName] = images[path].default;
}

export default processedImages;
