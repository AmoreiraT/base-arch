import { ApiResult } from '../../../../core/model/api-result';
import { AccountModel } from '../../model/account-model';
import { Authentication } from '../commands/login-command';
export interface LoginRepositoryInterface {
  auth: (params: Authentication.Params) => Promise<ApiResult<AccountModel>>;
}
