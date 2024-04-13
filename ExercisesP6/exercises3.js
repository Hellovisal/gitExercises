const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function readFile(filePath) {
    try {
        const data = await readFileAsync(filePath, "utf-8");
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function writeFile(filePath, data) {
    try {
        const newData = "Hello" + "  " + "visal";
        await writeFileAsync(filePath, newData);
        console.log("Successfully wrote to file");
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Example usage:
async function fileOperations() {
    try {
        const data = await readFile("input.txt");
        await writeFile("output.txt", data);
    } catch (error) {
        console.error("File operation error:", error);
    }
}

fileOperations();
