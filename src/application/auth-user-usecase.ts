import {
  ApiService,
  AuthUserDTO,
  AuthUserResultDTO,
  UseCase,
} from 'src/domain';
import { AuthFailureError } from './../domain/errors';
import { Inject, Injectable } from '@nestjs/common';

Injectable();
export class AuthUserUsecase
  implements UseCase<AuthUserDTO, AuthUserResultDTO | AuthFailureError>
{
  constructor(@Inject('ApiService') public apiService: ApiService) {}

  async execute(
    data: AuthUserDTO,
  ): Promise<AuthUserResultDTO | AuthFailureError> {
    const result = await this.apiService.authenticate(data);
    if (result instanceof AuthFailureError) return result;

    return result;
  }
}
