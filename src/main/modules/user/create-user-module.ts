import { Module } from '@nestjs/common';
import { CreateUserController } from '../../../interface/controllers';
import { CreateUserUsecase } from '../../../application';
import { SqliteUserRepository } from '../../../infra/repositories';
import { env } from '../app.module';

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserUsecase,
    {
      provide: 'UserRepository',
      useFactory: () =>
        new SqliteUserRepository(env.database, env.username, env.password),
    },
  ],
})
export class CreateUserModule {}
