import { ApiResult } from "../../../core/model/api-result";
import { LoginRepositoryInterface } from "../domain/repository/login-repository-interface";
import { LoginModel } from "../model/login-model";

class LoginRepositoryImpl implements LoginRepositoryInterface {
    async call(): Promise<ApiResult<LoginModel>> {
        var url = process.env.REACT_APP_API_BASE_URL;

        var result = new ApiResult<LoginModel>('', '', null, false);
    }

}