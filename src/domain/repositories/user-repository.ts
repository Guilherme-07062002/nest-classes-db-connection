import { CreateUserDTO } from '../dtos';
import { User } from '../entities';

export interface UserRepository {
  create(data: CreateUserDTO): Promise<User>;
}
