module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^.+\\.(sass)$": "babel-jest"
  },
  moduleFileExtensions: ['js','sass']
}