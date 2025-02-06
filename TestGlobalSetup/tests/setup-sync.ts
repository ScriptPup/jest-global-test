import { JestConfigWithTsJest } from "ts-jest";

module.exports = async (globalConfig: JestConfigWithTsJest, projectConfig: JestConfigWithTsJest) => {    
    console.log("Starting global setup");    
    console.log("Ending global setup")
}