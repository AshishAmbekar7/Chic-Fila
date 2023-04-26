"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
class Helper {
    async readFileIntoJson(file) {
        const result = [];
        const fileStream = fs_1.default.createReadStream(file);
        const readLine = readline_1.default.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of readLine) {
            result.push(await this.parseJson(line));
        }
        return result;
    }
    writeFile(filePath, content) {
        try {
            console.info(`Write to the file: ${filePath}`);
            fs_1.default.writeFileSync(filePath, content, { flag: 'w+' });
        }
        catch (err) {
            console.error(`Failed to write the file: ${filePath}`);
        }
    }
    async parseJson(data) {
        try {
            const jsonString = JSON.stringify(data);
            return JSON.parse(jsonString);
        }
        catch (err) {
            console.error("Error parsing JSON string:", err);
        }
    }
    getJsonFromArray(arrayJsonFile, startWord) {
        const foundJson = [];
        arrayJsonFile.forEach(json => {
            if (JSON.stringify(json).startsWith(startWord, 4)) {
                foundJson.push(json);
            }
        });
        return foundJson;
    }
}
exports.Helper = Helper;
