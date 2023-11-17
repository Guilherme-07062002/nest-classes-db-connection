import { Injectable } from '@nestjs/common';
import { IAppService } from '../../domain/services';

@Injectable()
export class AppService implements IAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
