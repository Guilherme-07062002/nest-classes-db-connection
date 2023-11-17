import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO, CreateUserResultDTO } from '../domain/dtos';
import { UseCase } from '../domain/ports';
import { UserRepository } from '../domain/repositories';

@Injectable()
export class CreateUserUsecase
  implements UseCase<CreateUserDTO, CreateUserResultDTO>
{
  constructor(
    @Inject('UserRepository') public userRepository: UserRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<CreateUserResultDTO> {
    const result = await this.userRepository.create(data);
    return result.toJson();
  }
}
