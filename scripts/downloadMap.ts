import fs from "fs";
import path from "path";

async function download() {
  try {
    const res = await fetch("https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=150524");
    if (!res.ok) {
      throw new Error(`Failed to download: ${res.statusText}`);
    }
    const data = await res.json();
    const targetPath = path.resolve(process.cwd(), "src/data/kulunGeo.json");
    
    // Ensure dir exists
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
    console.log("Map data downloaded successfully to", targetPath);
  } catch (err) {
    console.error("Error downloading map:", err);
  }
}

download();
