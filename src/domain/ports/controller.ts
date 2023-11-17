import { Request, Response } from '../ports';

export interface IController {
  handle(request: Request | unknown): Promise<Response>;
}
