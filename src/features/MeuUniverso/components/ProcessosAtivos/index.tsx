import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

import { MoonLoader } from 'react-spinners';
import { ProcessosAtivosCommand } from '../../domain/commands/processos-ativos-command';
import { makeRemoteProcessos } from '../../data/processos-ativos-impl';
import { ProcessosAtivosRepositoryInterface } from '../../domain/repository/processos-ativos-repository-interface';
import { ProcessosAtivosModel } from '../../model/processos-ativos-model';

// import { apiEPM } from "../../../../services/api/epm";

type Processos = {
  FASE_PROCESSUAL: string;
  Qtd: number;
};

const ProcessosAtivos = () => {
  // Objeto de exemplo caso o EPM não esteja funcionando
  // const processos = [
  //   {FASE_PROCESSUAL: 'Teste 1', Qtd: 100},
  //   {FASE_PROCESSUAL: 'Teste 2', Qtd: 200},
  //   {FASE_PROCESSUAL: 'Teste 3', Qtd: 300},
  //   {FASE_PROCESSUAL: 'Teste 4', Qtd: 400},
  //   {FASE_PROCESSUAL: 'Teste 5', Qtd: 500},
  //   {FASE_PROCESSUAL: 'Teste 6', Qtd: 600},
  //   {FASE_PROCESSUAL: 'Teste 7', Qtd: 700},
  //   {FASE_PROCESSUAL: 'Teste 8', Qtd: 800}
  // ]
  const [processActives, setProcessActives] = useState<ProcessosAtivosModel>();
  const [totalProcess, setTotalProcess] = useState<number>(0);

  const sumQtdprocess = (total: number, item: Processos) => {
    return total + item.Qtd;
  };

  const calcularPorcentagem = (qtd: number) => {
    return (qtd * 100) / totalProcess;
  };

  const initProcess: () => Promise<void> = useCallback(async () => {
    const processosRepo: ProcessosAtivosRepositoryInterface = makeRemoteProcessos();
    const cmd = new ProcessosAtivosCommand(processosRepo);
    const response = await cmd.call('?qid=FASE_PROCESSUAL:FASE');
    console.log(response.data);
    setProcessActives(response.data);
  }, []);

  useEffect(() => {
    initProcess();
    if (processActives?.list.length === 0) {
      initProcess();
    }
  }, [initProcess, processActives]);

  useEffect(() => {
    // setTotalProcess(processActives?.list.reduce(sumQtdprocess, 0));
  }, [processActives]);

  return (
    <S.Container>
      <S.TitleCardContainer>
        <S.TotalProcessos>{totalProcess}</S.TotalProcessos>
        <S.TitleCard>Processos Ativos</S.TitleCard>
      </S.TitleCardContainer>
      {(processActives?.rowCount as number) > 0 ? (
        <S.ListProcessosUl>
          {processActives?.list.map((processo) => {
            return (
              <S.ListProcessosLi key={processo.FASE}>
                <S.ListItemProcesso>
                  <S.ListItemProcessoInfo>
                    <S.ListItemTitleProcesso>{processo.FASE}</S.ListItemTitleProcesso>
                    <S.ListItemPorcentagemProcesso>
                      {processo.PERCENTUAL.toString()}%
                    </S.ListItemPorcentagemProcesso>
                  </S.ListItemProcessoInfo>
                  <S.Chart percentual={processo.PERCENTUAL.toString()} />
                  <S.BackgroundChart />
                </S.ListItemProcesso>
              </S.ListProcessosLi>
            );
          })}
        </S.ListProcessosUl>
      ) : (
        <S.ContainerLoading>
          <MoonLoader size={40} color="#1e4072" />
        </S.ContainerLoading>
      )}
    </S.Container>
  );
};

export default ProcessosAtivos;
