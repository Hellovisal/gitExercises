const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

function readFile(filePath) {
  return readFilePromise(filePath, "utf-8");
}

function writeFile(filePath, data) {
    const newData = "Hello" + "  " + "visal";
    return writeFilePromise(filePath, newData);
}

// Example usage:
readFile("input.txt")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

writeFile("output.txt")
  .then(() => {
    console.log("Successfully wrote to file");
  })
  .catch(err => {
    console.error(err);
  });
