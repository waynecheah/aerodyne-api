import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

// import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'


async function bootstrap () {
  // const fastify = new FastifyAdapter({ logger: false })
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const logger = new Logger('Bootstrap')

  const configService = app.get(ConfigService)
  const serviceName   = configService.get<string>('SERVICE_NAME')
  const serverHost    = configService.get<string>('SERVER_HOST')
  const serverPort    = configService.get<number>('SERVER_PORT')

  await app.listen(serverPort, serverHost)
  logger.log(`${serviceName} is running on ${await app.getUrl()}`)
}
bootstrap()
