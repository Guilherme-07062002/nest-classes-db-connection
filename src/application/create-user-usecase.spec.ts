import { CreateUserDTO, CreateUserResultDTO } from '../domain/dtos';
import { CreateUserUsecase } from './create-user-usecase';
import { UserRepository } from '../domain/repositories';
import { User } from '../domain/entities';

const makeSut = () => {
  const repo: jest.Mocked<UserRepository> = { create: jest.fn() };
  const usecase = new CreateUserUsecase(repo);
  return { repo, usecase };
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

describe('testing create user usecase', () => {
  it('should create a user', async () => {
    const { repo, usecase } = makeSut();

    repo.create.mockResolvedValueOnce(makeFakeUser());
    const user = await usecase.execute(makeFakeCreateUserDTO());
    expect(user).toEqual({
      id: expect.any(String),
      name: 'any_name',
      email: 'any_email',
      role: 'scholar',
      code: 'any_code',
    } as CreateUserResultDTO);
  });
});
