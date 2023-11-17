import { AuthUserDTO, HttpClient } from './../domain';
import { AuthFailureError } from './../domain/errors';
import { SuapApiService } from './../infra/services';
import { AuthUserUsecase } from './auth-user-usecase';

const makeSut = () => {
  const httpClient: jest.Mocked<HttpClient> = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  };
  const service: jest.Mocked<SuapApiService> = {
    httpClient,
    authenticate: jest.fn(),
  };
  const usecase = new AuthUserUsecase(service);
  return { httpClient, service, usecase };
};

const fakeAuthProps = (): AuthUserDTO => ({
  username: 'username',
  password: 'password',
});

describe('testing auth user usecase', () => {
  it('should authenticate user returning access token', async () => {
    const { service, httpClient, usecase } = makeSut();

    httpClient.post.mockResolvedValue({ token: 'token' });
    service.authenticate.mockResolvedValue({ token: 'token', isValid: true });
    const result = await usecase.execute(fakeAuthProps());
    expect(result).toEqual({ token: 'token', isValid: true });
  });

  it('should throw error if authentication fails', async () => {
    const { service, httpClient, usecase } = makeSut();

    httpClient.post.mockRejectedValueOnce(new AuthFailureError());
    service.authenticate.mockResolvedValue(new AuthFailureError());
    const result = await usecase.execute(fakeAuthProps());
    expect(result).toBeInstanceOf(AuthFailureError);
  });
});
