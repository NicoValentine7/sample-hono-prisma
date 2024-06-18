import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { PrismaClient } from '@prisma/client'

const app = new Hono()
const prisma = new PrismaClient

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/accounts', async(c) => {
  const accounts = await prisma.applyAccount.findMany()
  return c.json(accounts);
})

export default { 
  port: 4000, 
  fetch: app.fetch, 
} 

