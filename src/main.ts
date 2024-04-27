import * as process from "process";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cors from 'cors'; // Импортируем cors middleware

async function start() {
  const port = process.env.PORT || 5040;
  const app = await NestFactory.create(AppModule);

  // Включаем CORS для HTTP запросов
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Создаем экземпляр ExpressAdapter
  const expressApp = app.getHttpAdapter().getInstance();

  // Применяем middleware cors для WebSocket соединений
  expressApp.use(cors());

  const config = new DocumentBuilder()
    .setTitle('Gost Oil')
    .setDescription('Документация rest api')
    .setVersion('1.0.0')
    .addTag('Gost-oil')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(port, () => {
    console.info(`server start port: ${process.env.PORT}`);
  });
}

start();