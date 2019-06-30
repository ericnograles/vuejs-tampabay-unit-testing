describe('HelloWorld.vue', () => {
  it('renders properly', async () => {
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' })
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
