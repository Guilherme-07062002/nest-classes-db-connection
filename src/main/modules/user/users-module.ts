import { Module } from '@nestjs/common';
import { CreateUserModule } from './create-user-module';

@Module({
  imports: [CreateUserModule],
  providers: [CreateUserModule],
  exports: [CreateUserModule],
})
export class UsersModule {}
