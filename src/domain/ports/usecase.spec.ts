import { UseCase } from './usecase';

const usecase: UseCase = {
  execute: jest.fn(),
};

describe('testing usecase port', () => {
  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  it('should have execute method', () => {
    expect(usecase.execute).toBeDefined();
  });
});
