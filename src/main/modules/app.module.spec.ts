// app.module.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../interface/controllers';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const response = await appController.handle();
      expect(response).toEqual({ status: 200, body: 'Hello World!' });
    });
  });
});
