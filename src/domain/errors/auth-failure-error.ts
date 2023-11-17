import { ApplicationError } from './application-error';

export class AuthFailureError extends ApplicationError {
  constructor() {
    super(`Invalid credentials`, 'L100');
  }
}
