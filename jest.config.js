const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/clients/(.*)$": "<rootDir>/src/clients/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@/domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@/services/(.*)$": "<rootDir>/src/services/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/tests/(.*)$": "<rootDir>/src/tests/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["src/tests/*", "src/pages/*"],
};

module.exports = createJestConfig(customJestConfig);
