import { ApiResult } from '../../../core/model/api-result';
import { LoginRepositoryInterface } from '../domain/repository/login-repository-interface';
import { LoginModel } from '../model/login-model';
import {
  HttpClient,
  HttpRequest
} from '../../../core/infrastructure/http/protocols/protocols-http';
import { AxiosHttpClient } from '../../../core/infrastructure/http';

export class LoginRepositoryImpl implements LoginRepositoryInterface {
  async call(user: String, pass: String): Promise<ApiResult<LoginModel>> {
    const url = process.env.REACT_APP_API_BASE_URL + 'Security/login';
    const map = await new AxiosHttpClient()
      .request({
        url,
        method: 'post',
        body: {
          user,
          pass
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          mode: 'cors',
          credentials: 'same-origin'
        }
      })
      .then((response) => response.body.json())
      .then((responseJson) => {
        console.log('callURL', responseJson);
        sessionStorage.setItem('AccessToken', responseJson.accessToken);
        return responseJson;
      });
    const result = new ApiResult<LoginModel>('', '', map, false);
    return result;
  }
}
