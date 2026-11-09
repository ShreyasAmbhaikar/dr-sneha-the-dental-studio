const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const imagePath = 'C:/Users/Shreyas Asus Tuf/.gemini/antigravity/brain/17fc3214-730b-411a-95a5-95cd76a14bd4/.user_uploaded/media_1794245333371_70f9193a.jpg';
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const W = info.width, H = info.height;
  function isLime(x, y) {
    if (x < 0 || x >= W || y < 0 || y >= H) return false;
    const idx = (y * W + x) * info.channels;
    return (data[idx + 1] > 180 && data[idx] > 120 && data[idx + 2] < 70);
  }

  const dx = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let startX = null, startY = null;
  for (let y = 0; y < H && !startX; y++) {
    for (let x = 0; x < W; x++) {
      if (isLime(x, y)) { startX = x; startY = y; break; }
    }
  }

  let x = startX, y = startY, dir = 7;
  const rawPts = [];
  for (let step = 0; step < 50000; step++) {
    rawPts.push([x, y]);
    let found = false;
    for (let i = 0; i < 8; i++) {
      const nd = (dir + 7 + i) % 8;
      const nx = x + dx[nd];
      const ny = y + dy[nd];
      if (isLime(nx, ny)) {
        x = nx; y = ny; dir = nd; found = true; break;
      }
    }
    if (!found || (x === startX && y === startY)) break;
  }

  console.log('Raw perimeter points:', rawPts.length);

  function rdp(points, epsilon) {
    if (points.length <= 2) return points;
    let maxDist = 0, index = 0;
    const [x1, y1] = points[0];
    const [x2, y2] = points[points.length - 1];
    for (let i = 1; i < points.length - 1; i++) {
      const [x, y] = points[i];
      const num = Math.abs((y2 - y1)*x - (x2 - x1)*y + x2*y1 - y2*x1);
      const den = Math.hypot(y2 - y1, x2 - x1);
      const dist = den === 0 ? Math.hypot(x - x1, y - y1) : num / den;
      if (dist > maxDist) {
        maxDist = dist;
        index = i;
      }
    }
    if (maxDist > epsilon) {
      const left = rdp(points.slice(0, index + 1), epsilon);
      const right = rdp(points.slice(index), epsilon);
      return left.slice(0, -1).concat(right);
    } else {
      return [points[0], points[points.length - 1]];
    }
  }

  // Adjust coordinates slightly (+5, +2) so the circle center (507, 510) aligns with (512, 512)
  const centeredPts = rawPts.map(([px, py]) => [px + 5, py + 2]);
  const simplified = rdp(centeredPts, 1.2);
  console.log('Simplified points count:', simplified.length);

  function toPath(pts) {
    return pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ') + ' Z';
  }

  const toothPath = toPath(simplified);

  // SVG representation matching the new uploaded circular favicon
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <circle cx="512" cy="512" r="490" fill="#102b33"/>
  <path fill="#a4f804" d="${toothPath}"/>
</svg>
`;

  fs.writeFileSync('src/app/icon.svg', svgContent);
  fs.writeFileSync('public/favicon.svg', svgContent);
  console.log('Successfully written src/app/icon.svg and public/favicon.svg');

  // Generate raster favicon variants for browser & mobile home screen compatibility
  const svgBuffer = Buffer.from(svgContent);
  await sharp(svgBuffer).resize(32, 32).png().toFile('public/favicon.png');
  await sharp(svgBuffer).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(svgBuffer).resize(48, 48).png().toFile('public/favicon-48x48.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(svgBuffer).resize(192, 192).png().toFile('public/icon-192.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile('public/icon-512.png');
  console.log('Successfully generated all browser and mobile PNG icons!');
}

main().catch(console.error);
