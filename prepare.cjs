const fs = require('node:fs');
const path = require('node:path');

const files = {
  "home.jsx": "app/page.jsx",
  "admin.jsx": "app/admin/page.jsx",
  "admin-api.js": "app/api/admin/route.js",
  "layout.jsx": "app/layout.jsx",
  "style.css": "app/style.css",
  "logo.jpeg": "public/logo.jpeg",
  "lakshitha.jpeg": "public/lakshitha.jpeg",
  "githma.jpeg": "public/githma.jpeg"
};

for (const [src, dst] of Object.entries(files)) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}
