import { Command, CommandResult } from '../../../../core/commands/command';
import { ProcessosAtivosModel } from '../../model/processos-ativos-model';
import { ProcessosAtivosRepositoryInterface } from '../repository/processos-ativos-repository-interface';

export class ProcessosAtivosCommand extends Command<ProcessosAtivos.Model, ProcessosAtivos.Params> {
  repo: ProcessosAtivosRepositoryInterface;
  constructor(repo: ProcessosAtivosRepositoryInterface) {
    super();
    this.repo = repo;
  }

  async call(params: ProcessosAtivos.Params): Promise<CommandResult<ProcessosAtivos.Model>> {
    let response: ProcessosAtivos.Model;
    try {
      const commandResult = await this.repo.getProcess(params);
      return new CommandResult<ProcessosAtivos.Model>('', '', commandResult.data);
    } catch (err: any) {
      return new CommandResult<ProcessosAtivos.Model>(err, err, response!);
    }
  }
}

export namespace ProcessosAtivos {
  export type Params = string;

  export type Model = ProcessosAtivosModel;
}
