import { Module } from '@nestjs/common';
import { CreateUserController } from '../../../interface/controllers';
import { CreateUserUsecase } from '../../../application';
import { FakeUserRepository } from '../../../infra/repositories';

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserUsecase,
    {
      provide: 'UserRepository',
      useFactory: () => new FakeUserRepository(),
    },
  ],
})
export class CreateUserModule {}
