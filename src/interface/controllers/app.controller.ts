import { Controller, Get } from '@nestjs/common';
import { GetHelloUsecase } from '../../application';
import { IController, Response } from '../../domain';
import { ok } from '../adapters';

@Controller()
export class AppController implements IController {
  constructor(private readonly getHelloUsecase: GetHelloUsecase) {}

  @Get()
  async handle(): Promise<Response> {
    const result = await this.getHelloUsecase.execute();
    return ok(result);
  }
}
