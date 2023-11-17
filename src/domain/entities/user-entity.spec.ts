import { User } from './';

const makeFakeUser = (): User => {
  return new User({
    id: '12345',
    name: 'John Doe',
    email: 'email@email.com',
    password: '123456',
    role: 'scholar',
    code: '123456',
  });
};

describe('testing user entity', () => {
  it('should create user', () => {
    const user = makeFakeUser();
    expect(user).toBeInstanceOf(User);
  });

  it('should return user json', () => {
    const user = makeFakeUser();
    const userJson = user.toJson();
    expect(userJson).toEqual({
      id: '12345',
      name: 'John Doe',
      email: user.email,
      role: user.role,
      code: user.code,
    });
  });
});
