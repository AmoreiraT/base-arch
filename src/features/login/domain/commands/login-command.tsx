import { Command, CommandResult } from '../../../../core/commands/command';
import { AccountModel } from '../../model/account-model';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../repository/login-repository-interface';

export class LoginCommand extends Command<AccountModel, Authentication.Params> {
  repo: LoginRepositoryInterface;
  constructor(repo: LoginRepositoryInterface) {
    super();
    this.repo = repo;
  }

  async call(params: Authentication.Params): Promise<CommandResult<AccountModel>> {
    let response: AccountModel;
    try {
      const commandResult = await this.repo.auth(params);
      return new CommandResult<AccountModel>('', '', commandResult.data);
    } catch (err: any) {
      return new CommandResult<AccountModel>(err, err, response!);
    }
  }
}

export namespace Authentication {
  export type Params = {
    username: string;
    password: string;
  };

  export type Model = AccountModel;
}
