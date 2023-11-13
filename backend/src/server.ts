import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log : ['query'],

})

async function bootstrap(){
  const fastify = Fastify({
    logger : true,
  });

  // Configure cors police
  await fastify.register(cors, {
    origin: true
  })

  fastify.get('/bolao/contagem', async () => {
    // Exemplo de consultas com o banco do prisma
    // const boloes = await prisma.bolao.findMany({
    //   where : {
    //     code : {
    //       startsWith : 'T'
    //     }
    //   } 
    // })

    const boloes = await prisma.bolao.count()

    return { boloes }
  })

  await fastify.listen({ port: 3333 })
  // await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()