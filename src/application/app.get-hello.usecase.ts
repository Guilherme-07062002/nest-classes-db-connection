import { UseCase } from '../domain/ports';
import { Injectable } from '@nestjs/common';
import { AppService } from '../infra/services';

@Injectable()
export class GetHelloUsecase implements UseCase<void, string> {
  constructor(public appService: AppService) {}

  async execute(): Promise<string> {
    return this.appService.getHello();
  }
}
