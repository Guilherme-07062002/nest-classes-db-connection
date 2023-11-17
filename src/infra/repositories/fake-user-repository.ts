import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../domain/dtos';
import { User } from '../../domain/entities';
import { UserRepository } from '../../domain/repositories';

@Injectable()
export class FakeUserRepository implements UserRepository {
  async create(data: CreateUserDTO): Promise<User> {
    const user = new User({
      id: 'any_id',
      ...data,
    });
    return user;
  }
}
