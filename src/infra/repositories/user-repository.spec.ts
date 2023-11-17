import { CreateUserDTO } from '../../domain/dtos';
import { FakeUserRepository } from './fake-user-repository';
import { User } from '../../domain/entities';

const makeSut = () => {
  const repo = new FakeUserRepository();
  return { repo };
};

const makeFakeCreateUserDTO = (): CreateUserDTO => ({
  name: 'any_name',
  email: 'any_email',
  password: 'any_password',
  role: 'scholar',
  code: 'any_code',
});

describe('testing user repository', () => {
  it('should create a user', async () => {
    const { repo } = makeSut();
    const user = await repo.create(makeFakeCreateUserDTO());
    expect(user).toBeInstanceOf(User);
  });
});
