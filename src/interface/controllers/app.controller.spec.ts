import { AppController } from './app.controller';
import { AppService } from '../../infra/services';
import { GetHelloUsecase } from '../../application';

const makeSut = () => {
  const service: jest.Mocked<AppService> = { getHello: jest.fn() };
  const usecase: jest.Mocked<GetHelloUsecase> = {
    appService: service,
    execute: jest.fn(async () => {
      return service.getHello();
    }),
  };
  const controller = new AppController(usecase);

  return { controller, service, usecase };
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('testing app controller', () => {
  const { controller, service } = makeSut();

  describe('testing handle', () => {
    it('should return "Hello World!"', async () => {
      service.getHello.mockReturnValueOnce('Hello World!');
      const response = await controller.handle();

      expect(response).toEqual({ status: 200, body: 'Hello World!' });
    });
  });
});
