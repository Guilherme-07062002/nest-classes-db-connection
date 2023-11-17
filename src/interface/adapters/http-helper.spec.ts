import {
  ok,
  created,
  badRequest,
  forbidden,
  notFound,
  unauthorized,
} from './http-helper';

describe('testing http helper', () => {
  describe('testing ok', () => {
    it('should return a 200 response', () => {
      const response = ok('any_value');
      expect(response).toEqual({ status: 200, body: 'any_value' });
    });
  });

  describe('testing created', () => {
    it('should return a 201 response', () => {
      const response = created('any_value');
      expect(response).toEqual({ status: 201, body: 'any_value' });
    });
  });

  describe('testing badRequest', () => {
    it('should return a 400 response', () => {
      const response = badRequest('any_value');
      expect(response).toEqual({ status: 400, body: 'any_value' });
    });
  });

  describe('testing forbidden', () => {
    it('should return a 403 response', () => {
      const response = forbidden('any_value');
      expect(response).toEqual({ status: 403, body: 'any_value' });
    });
  });

  describe('testing notFound', () => {
    it('should return a 404 response', () => {
      const response = notFound('any_value');
      expect(response).toEqual({ status: 404, body: 'any_value' });
    });
  });

  describe('testing unauthorized', () => {
    it('should return a 401 response', () => {
      const response = unauthorized('any_value');
      expect(response).toEqual({ status: 401, body: 'any_value' });
    });
  });
});
