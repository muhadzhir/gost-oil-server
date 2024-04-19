import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { ParticipantsModule } from './participants/participants.module';
import { Participant } from "./participants/participants.model";
import { NumbersModule } from './numbers/numbers.module';
@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Participant],
    }),
    UsersModule,
    ParticipantsModule,
    NumbersModule
  ]
})
export class AppModule { }
