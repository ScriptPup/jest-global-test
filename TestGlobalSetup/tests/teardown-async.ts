import { JestConfigWithTsJest } from "ts-jest";

module.exports = async (globalConfig: JestConfigWithTsJest, projectConfig: JestConfigWithTsJest) => {    
    console.log("Starting global teardown");
    await new Promise(() => { setTimeout(() => { }, 1000) });
    console.log("Ending global teardown")
}