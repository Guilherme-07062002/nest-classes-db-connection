import { Module } from '@nestjs/common';
import { AppController } from '../../interface/controllers';
import { GetHelloUsecase } from '../../application';
import { AppService } from '../../infra/services';
import { UsersModule } from './user/users-module';
import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  database: process.env.SQLITE_DB_NAME,
  username: process.env.SQLITE_USER_NAME,
  password: process.env.SQLITE_PASSWORD,
};

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [
    GetHelloUsecase,
    {
      provide: AppService,
      useFactory: () => new AppService(),
    },
  ],
})
export class AppModule {}
