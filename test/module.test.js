jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('../example/nuxt.config')
config.dev = false

let nuxt, port, window

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('basic', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
    window = await nuxt.renderAndGetWindow(url('/'))
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('$api is defined', () => {
    window.onNuxtReady(() => {
      expect(window.$nuxt.$api).toBeDefined()
    })
  })
})
