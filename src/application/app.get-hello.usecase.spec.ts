import { GetHelloUsecase } from './app.get-hello.usecase';
import { AppService } from '../infra/services';

const makeSut = () => {
  const appService: jest.Mocked<AppService> = {
    getHello: jest.fn(),
  };
  const usecase = new GetHelloUsecase(appService);
  return { usecase, appService };
};

describe('testing get hello usecase', () => {
  const { usecase, appService } = makeSut();

  describe('execute', () => {
    it("should return 'Hello World!'", async () => {
      appService.getHello.mockReturnValueOnce('Hello World!');
      const response = await usecase.execute();
      expect(response).toBe('Hello World!');
    });
  });
});
