import { Command, CommandResult } from '../../../../core/commands/command';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../repository/login-repository-interface';

export class LoginCommand extends Command<Authentication.Model, Authentication.Params> {
  repo: LoginRepositoryInterface;
  constructor(repo: LoginRepositoryInterface) {
    super();
    this.repo = repo;
  }

  async call(params: Authentication.Params): Promise<CommandResult<Authentication.Model>> {
    var response: Authentication.Model;

    try {
      const commandResult = await this.repo.auth(params);
      return new CommandResult<LoginModel>('', '', commandResult.data);
    } catch (err: any) {
      return new CommandResult<LoginModel>(err, err, response!);
    }
  }
}

export namespace Authentication {
  export type Params = {
    username: string;
    password: string;
  };

  export type Model = LoginModel;
}
