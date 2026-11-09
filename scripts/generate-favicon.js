const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const imagePath = 'C:/Users/Shreyas Asus Tuf/.gemini/antigravity/brain/17fc3214-730b-411a-95a5-95cd76a14bd4/.user_uploaded/media_1794244195451_8929f45b.jpg';
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

  function traceOuterBoundary(startX, startY) {
    const points = [];
    let x = startX, y = startY;
    let dir = 7;
    for (let step = 0; step < 50000; step++) {
      points.push([x, y]);
      let found = false;
      for (let i = 0; i < 8; i++) {
        const nd = (dir + 7 + i) % 8;
        const nx = x + dx[nd];
        const ny = y + dy[nd];
        if (isLime(nx, ny)) {
          x = nx;
          y = ny;
          dir = nd;
          found = true;
          break;
        }
      }
      if (!found || (x === startX && y === startY)) break;
    }
    return points;
  }

  function traceInnerToothHole(startX, startY) {
    const points = [];
    let x = startX, y = startY;
    let dir = 0;
    for (let step = 0; step < 50000; step++) {
      points.push([x, y]);
      let found = false;
      for (let i = 0; i < 8; i++) {
        const nd = (dir + 7 + i) % 8;
        const nx = x + dx[nd];
        const ny = y + dy[nd];
        // Trace 0s inside the hole that border 1s
        if (!isLime(nx, ny)) {
          x = nx;
          y = ny;
          dir = nd;
          found = true;
          break;
        }
      }
      if (!found || (x === startX && y === startY)) break;
    }
    return points;
  }

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

  // Find outer start (first lime pixel from top)
  let outerStart = null;
  for (let y = 0; y < H && !outerStart; y++) {
    for (let x = 0; x < W; x++) {
      if (isLime(x, y)) { outerStart = [x, y]; break; }
    }
  }

  // Find inner start (first non-lime pixel inside the tooth cutout from center)
  let innerStart = null;
  let insideSpine = false;
  for (let x = 250; x < 600; x++) {
    if (isLime(x, 512)) insideSpine = true;
    if (insideSpine && !isLime(x, 512)) { innerStart = [x, 512]; break; }
  }

  const outerRaw = traceOuterBoundary(outerStart[0], outerStart[1]);
  const innerRaw = traceInnerToothHole(innerStart[0], innerStart[1]);

  console.log('Outer raw points:', outerRaw.length);
  console.log('Inner raw points:', innerRaw.length);

  const outerSimplified = rdp(outerRaw, 1.0);
  const innerSimplified = rdp(innerRaw, 1.0);

  console.log('Outer simplified:', outerSimplified.length);
  console.log('Inner simplified:', innerSimplified.length);

  function toPath(pts) {
    return pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ') + ' Z';
  }

  const outerPath = toPath(outerSimplified);
  const innerPath = toPath(innerSimplified);

  // Deep dental teal circular background matching brand identity & attachment 3
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <circle cx="512" cy="512" r="490" fill="#102b33"/>
  <path fill="#a4f804" fill-rule="evenodd" d="${outerPath} ${innerPath}"/>
</svg>
`;

  fs.writeFileSync('src/app/icon.svg', svgContent);
  fs.writeFileSync('public/favicon.svg', svgContent);
  console.log('Successfully wrote src/app/icon.svg and public/favicon.svg');

  // Generate crisp standard sizes for browsers and mobile bookmarks
  const svgBuffer = Buffer.from(svgContent);
  await sharp(svgBuffer).resize(32, 32).png().toFile('public/favicon.png');
  await sharp(svgBuffer).resize(48, 48).png().toFile('public/favicon-48x48.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(svgBuffer).resize(192, 192).png().toFile('public/icon-192.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile('public/icon-512.png');
  console.log('Successfully generated all browser PNG icons!');
}

main().catch(console.error);
