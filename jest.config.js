/* eslint-disable */
const { defaults } = require('jest-config')
const { TEST_MODE } = process.env
const TEST_PATTERNS = {
  VISUAL_REGRESSION: '**/tests/visual-regression/**/*.spec.(js|jsx|ts|tsx)',
}

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  preset: TEST_MODE === 'visual-regression' ? 'jest-puppeteer' : defaults.preset,
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: TEST_MODE === 'visual-regression' ?  [
    TEST_PATTERNS.VISUAL_REGRESSION,
  ] : [ "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)" ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/tests/after-env.js',
}
