import * as process from "process";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start( ) {
  const port = process.env.PORT || 5040
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
  const config = new DocumentBuilder()
    .setTitle('Gost Oil')
    .setDescription('Документация rest api')
    .setVersion('1.0.0')
    .addTag('Gost-oil')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  await app.listen(port, () => {console.log(`server start port: ${process.env.PORT}`)})
}

start()