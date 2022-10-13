import { ApiResult } from '../../../core/model/api-result';
import { LoginRepositoryInterface } from '../domain/repository/login-repository-interface';
import { LoginModel } from '../model/login-model';
import {
  HttpClient,
  HttpRequest,
  HttpStatusCode
} from '../../../core/infrastructure/http/protocols/protocols-http';
import { Authentication } from '../domain/commands/login-command';
import { InvalidCredentialsError, UnexpectedError } from '../../../core/error';
import { makeApiUrl } from '../../../core/infrastructure/http/factories/api-url-factory';
import { makeAxiosHttpClient } from '../../../core/infrastructure/http/factories/axios-http-client-factory';
import { AccountModel } from '../model/account-model';

export const makeRemoteAuthentication = (): LoginRepositoryInterface =>
  new LoginRepositoryImpl(makeApiUrl('Security/login'), makeAxiosHttpClient());

export class LoginRepositoryImpl implements LoginRepositoryInterface {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoginRepositoryImpl.Model>
  ) {}

  async auth(params: Authentication.Params): Promise<ApiResult<Authentication.Model>> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return new ApiResult<Authentication.Model>('', '', httpResponse.body, false);
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace LoginRepositoryImpl {
  export type Model = AccountModel;
}
