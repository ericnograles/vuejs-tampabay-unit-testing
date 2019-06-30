/* eslint-disable */

// jest-image-snapshot extends
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

// Puppeteer for visual regression tests
require('expect-puppeteer')
const { TEST_MODE } = process.env
if (TEST_MODE === 'visual-regression') {
  jest.setTimeout(60000)
}
