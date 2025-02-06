import { JestConfigWithTsJest } from "ts-jest";

module.exports = async (globalConfig: JestConfigWithTsJest, projectConfig: JestConfigWithTsJest) => {    
    console.log("Starting global teardown");
    await new Promise((res) => { setTimeout(() => { res(null); }, 1000) });
    console.log("Ending global teardown")
}