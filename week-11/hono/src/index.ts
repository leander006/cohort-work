import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {

  // const body = await c.req.json
  return c.text('Hello Hono!')
})



export default app
