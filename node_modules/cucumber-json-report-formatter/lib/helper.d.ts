export declare class Helper {
    readFileIntoJson(file: any): Promise<string[]>;
    writeFile(filePath: any, content: any): void;
    parseJson(data: any): Promise<any>;
    getJsonFromArray(arrayJsonFile: any, startWord: any): string[];
}
