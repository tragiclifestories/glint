/* eslint-env node */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.test.ts'],
  testPathIgnorePatterns: ['/__tests__/type-tests']
};