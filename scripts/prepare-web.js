const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "icons"), { recursive: true });
for (const file of ["index.html", "manifest.webmanifest", "sw.js"]) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}
fs.copyFileSync(path.join(root, "icons", "icon.svg"), path.join(out, "icons", "icon.svg"));
console.log("Zikir Takip web dosyaları Android paketine hazırlandı.");