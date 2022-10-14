// eslint-disable-next-line @typescript-eslint/no-namespace
import { ApiResult } from '../../../core/model/api-result';
import {
  HttpClient,
  HttpStatusCode
} from '../../../core/infrastructure/http/protocols/protocols-http';
import { InvalidCredentialsError, UnexpectedError } from '../../../core/error';
import { makeApiUrl } from '../../../core/infrastructure/http/factories/api-url-factory';
import { makeAxiosHttpClient } from '../../../core/infrastructure/http/factories/axios-http-client-factory';
import { ProcessosAtivos } from '../domain/commands/processos-ativos-command';
import { ProcessosAtivosRepositoryInterface } from '../domain/repository/processos-ativos-repository-interface';

export const makeRemoteProcessos = (): ProcessosAtivosRepositoryInterface =>
  new ProcessosAtivosRepositoryImpl(makeApiUrl('Integration/Query'), makeAxiosHttpClient());

export class ProcessosAtivosRepositoryImpl implements ProcessosAtivosRepositoryInterface {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ProcessosAtivosRepositoryImpl.Model>
  ) {}

  async getProcess(params: ProcessosAtivos.Params): Promise<ApiResult<ProcessosAtivos.Model>> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}${params}`,
      method: 'post',
      body: params
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return new ApiResult<ProcessosAtivos.Model>('', '', httpResponse.body, false);
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace ProcessosAtivosRepositoryImpl {
  export type Model = ProcessosAtivos.Model;
}
