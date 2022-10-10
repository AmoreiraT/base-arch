import { ApiResult } from '../../../../core/model/api-result';
import { LoginModel } from '../../model/login-model';
export interface LoginRepositoryInterface {
  call: (user: String, pass: String) => Promise<ApiResult<LoginModel>>;
}
