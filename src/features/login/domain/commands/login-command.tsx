import { Command, CommandResult } from '../../../../core/commands/command';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../repository/login-repository-interface';

export class LoginCommand extends Command<LoginModel, LoginModel> {
  repo: LoginRepositoryInterface;
  constructor(repo: LoginRepositoryInterface) {
    super();
    this.repo = repo;
  }

  call(params: LoginModel): CommandResult<LoginModel> {
    let response;
    try {
      const self = this;
      const commandResult = new Promise(async function (resolve, reject) {
        const result = await self.repo.call(params.login, params.password);
        resolve(result);
      });
      commandResult.then(function (result) {
        response = result as LoginModel;
      });
    } catch (err: any) {
      return new CommandResult<LoginModel>(err, err);
    }
    return new CommandResult('', '', response as unknown as LoginModel);
  }
}
