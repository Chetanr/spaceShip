export default {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
