import { Module } from '@nestjs/common';
import { AppController } from '../../interface/controllers';
import { GetHelloUsecase } from '../../application';
import { AppService } from '../../infra/services';
import { UsersModule } from './user/users-module';

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
