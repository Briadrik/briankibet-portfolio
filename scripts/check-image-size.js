const fs = require('fs');
const path = require('path');
const maxBytes = 200 * 1024; // 200 KB

const imgPath = path.join(__dirname, '..', 'public', 'brian-photo.jpg');
if (!fs.existsSync(imgPath)) {
  console.log('No profile image found at public/brian-photo.jpg');
  process.exit(0);
}
const stats = fs.statSync(imgPath);
if (stats.size > maxBytes) {
  console.warn(`Warning: profile image is ${(stats.size/1024).toFixed(1)} KB; recommended <= ${(maxBytes/1024)} KB`);
  process.exit(1);
}
console.log('Profile image size OK:', (stats.size/1024).toFixed(1), 'KB');
process.exit(0);
