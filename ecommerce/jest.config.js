// jest.config.js

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!jest.config.js",
    "!next.config.js",
    "!**/constants/**",
    "!**/types/**",
    "!**/services/**",
    "!**/theme/**",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/.vscode/**",
  ],
  globals: {
    __PATH_PREFIX__: "",
  },
  testMatch: ["**/**/__tests__/**/*.tsx"],
  modulePaths: ["./"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/constants/(.*)$": "<rootDir>/constants/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
    "^@/theme/(.*)$": "<rootDir>/theme/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/services/(.*)$": "<rootDir>/services/$1",
    "^@/providers/(.*)$": "<rootDir>/providers/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
