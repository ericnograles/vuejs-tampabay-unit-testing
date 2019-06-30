describe('HelloWorld.vue', () => {
  it('renders properly', async () => {
    await page.goto('http://localhost:8080')
    expect(true).toBe(true)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
