import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUsecase } from '../../application';
import { CreateUserDTO, IController, Response } from '../../domain';
import { created } from '../adapters';

@Controller('users')
export class CreateUserController implements IController {
  constructor(private readonly usecase: CreateUserUsecase) {}

  @Post()
  async handle(@Body() data: CreateUserDTO): Promise<Response> {
    const result = await this.usecase.execute(data);
    return created(result);
  }
}
