import { LoginRepositoryInterface } from '../repository/login-repository-interface';
import { LoginRepositoryImpl } from '../../data/login-repository-impl';
import { makeApiUrl } from '../../../../core/infrastructure/http/factories/api-url-factory';
import { makeAxiosHttpClient } from '../../../../core/infrastructure/http/factories/axios-http-client-factory';
import { LoginCommand } from './login-command';

export const makeRemoteAuthentication = (): LoginRepositoryInterface =>
  new LoginRepositoryImpl(makeApiUrl('Security/login'), makeAxiosHttpClient());
