import {
  CreateUserDTO,
  CreateUserResultDTO,
  User,
  UserRepository,
} from '../../domain';
import { CreateUserUsecase } from '../../application';
import { CreateUserController } from './create-user-controller';

const makeSut = () => {
  const repo: jest.Mocked<UserRepository> = { create: jest.fn() };
  const usecase: jest.Mocked<CreateUserUsecase> = {
    userRepository: repo,
    execute: jest.fn(async (user: CreateUserDTO) => {
      const result = await repo.create(user);
      return result.toJson() as CreateUserResultDTO;
    }),
  };
  const controller = new CreateUserController(usecase);

  return { controller, repo, usecase };
};

const makeFakeUser = (): User => {
  return new User({
    id: 'any_id',
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
    role: 'scholar',
    code: 'any_code',
  });
};

const makeFakeCreateUserDTO = (): CreateUserDTO => ({
  name: 'any_name',
  email: 'any_email',
  password: 'any_password',
  role: 'scholar',
  code: 'any_code',
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('testing create user controller', () => {
  const { controller, repo } = makeSut();

  describe('testing handle', () => {
    it('should return 201 and the created user', async () => {
      repo.create.mockResolvedValueOnce(makeFakeUser());
      const response = await controller.handle(makeFakeCreateUserDTO());
      expect(response).toEqual({
        status: 201,
        body: {
          id: expect.any(String),
          name: 'any_name',
          email: 'any_email',
          role: 'scholar',
          code: 'any_code',
        },
      });
    });
  });
});
