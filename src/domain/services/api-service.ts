import { AuthFailureError } from '../errors';
import { AuthUserDTO, AuthUserResultDTO } from './../dtos';

export interface ApiService {
  authenticate(
    data: AuthUserDTO,
  ): Promise<AuthUserResultDTO | AuthFailureError>;
}
