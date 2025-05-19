const { readFile, writeFile } = require("fs").promises;

async function replace() {
  let data = await readFile("./README.md", "utf8");
  data = data.replace("Repo", "Repository");
  await writeFile("./README.md", data, "utf8");
}

replace();