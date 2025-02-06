import { JestConfigWithTsJest } from "ts-jest";

module.exports = async (globalConfig: JestConfigWithTsJest, projectConfig: JestConfigWithTsJest) => {    
    console.log("Starting global setup");
    await new Promise((res) => { setTimeout(() => { res(null); }, 1000) });
    console.log("Ending global setup")
}