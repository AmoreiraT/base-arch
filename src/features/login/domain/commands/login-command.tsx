import { Command, CommandResult } from '../../../../core/commands/command';
import { LoginRepositoryImpl } from '../../data/login-repository-impl';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../repository/login-repository-interface';

export class LoginCommand extends Command<Authentication.Model, Authentication.Params> {
  repo: LoginRepositoryImpl;
  constructor(repo: LoginRepositoryImpl) {
    super();
    this.repo = repo;
  }

  call(params: Authentication.Params): CommandResult<Authentication.Model> {
    var response;
    try {
      const commandResult = new Promise<Authentication.Model>(async (resolve) => {
        var result = await this.repo.auth(params);
        resolve(result.data);
      });
      commandResult.then((result) => {
        response = result;
      });
      return new CommandResult<LoginModel>('', '', response);
    } catch (err: any) {
      return new CommandResult<LoginModel>(err, err);
    }
  }
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = LoginModel;
}
