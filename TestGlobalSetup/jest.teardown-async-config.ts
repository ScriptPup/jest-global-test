/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  coverageProvider: "v8",

  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  globalTeardown: "./tests/teardown-async.ts"
};

export default config;
