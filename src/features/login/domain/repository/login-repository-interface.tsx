import { ApiResult } from '../../../../core/model/api-result';
import { Authentication } from '../commands/login-command';
export interface LoginRepositoryInterface {
  auth: (params: Authentication.Params) => Promise<ApiResult<Authentication.Model>>;
}
