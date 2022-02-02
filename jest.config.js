module.exports = {
  setupFilesAfterEnv: [
    "./jest.setup.js",
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
    "^pages(.*)$": "<rootDir>/pages$1",
    "^styles(.*)$": "<rootDir>/styles$1",
    "^theme(.*)$": "<rootDir>/theme$1",
    "^utils(.*)$": "<rootDir>/utils$1",
  },
  testEnvironment: "jsdom",
};
