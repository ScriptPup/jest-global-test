import { JestConfigWithTsJest } from "ts-jest";

module.exports = async (globalConfig: JestConfigWithTsJest, projectConfig: JestConfigWithTsJest) => {    
    console.log("Starting global teardown");
    console.log("Ending global teardown")
}