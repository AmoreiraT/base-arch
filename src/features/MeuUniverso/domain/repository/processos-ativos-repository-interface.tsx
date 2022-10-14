import { ApiResult } from '../../../../core/model/api-result';
import { ProcessosAtivos } from '../commands/processos-ativos-command';
export interface ProcessosAtivosRepositoryInterface {
  getProcess: (params: ProcessosAtivos.Params) => Promise<ApiResult<ProcessosAtivos.Model>>;
}
