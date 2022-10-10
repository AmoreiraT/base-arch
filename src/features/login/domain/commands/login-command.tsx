import { Command, CommandResult } from '../../../../core/commands/command';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from "../repository/login-repository-interface";

export class LoginCommand extends Command<LoginModel, String>{
    repo: LoginRepositoryInterface;
    constructor(repo: LoginRepositoryInterface) {
        super()
        this.repo = repo
    }
    call(): CommandResult<LoginModel> {
        let response;

        try {
            var self = this;
            var commandResult = new Promise(
                async function (resolve, reject) {
                    var result = await self.repo.call();
                    resolve(result);
                }
            );
            commandResult.then(function (result) {
                response = result as LoginModel;
            });
        } catch (err: any) {
            return new CommandResult<LoginModel>(err, err, null);
        }
        return new CommandResult("", "", response as unknown as LoginModel);
    }
}