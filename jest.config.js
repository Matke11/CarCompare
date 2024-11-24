// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // point to the root of your project
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for browser-like environment
  // Add any other custom Jest settings you need
}

module.exports = createJestConfig(customJestConfig)
