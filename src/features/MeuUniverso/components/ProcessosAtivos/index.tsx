import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

import { MoonLoader } from 'react-spinners';

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
  const [processActives, setProcessActives] = useState<Processos[]>([]);
  const [totalProcess, setTotalProcess] = useState<number>(0);

  const sumQtdprocess = (total: number, item: Processos) => {
    return total + item.Qtd;
  };

  const calcularPorcentagem = (qtd: number) => {
    return (qtd * 100) / totalProcess;
  };

  const initProcess = useCallback(async () => {
    // const { status, data } = await apiEPM.getProcess("FASE_PROCESSUAL:FASE");
    // if (status !== 200) throw new Error();
    // if (data.error) {
    //   return console.log(data.error.message);
    // }
    // setProcessActives(data.list);
  }, []);

  useEffect(() => {
    if (processActives.length === 0) {
      initProcess();
    }
  }, [initProcess, processActives]);

  useEffect(() => {
    setTotalProcess(processActives.reduce(sumQtdprocess, 0));
  }, [processActives]);

  return (
    <S.Container>
      <S.TitleCardContainer>
        <S.TotalProcessos>{totalProcess}</S.TotalProcessos>
        <S.TitleCard>Processos Ativos</S.TitleCard>
      </S.TitleCardContainer>
      {processActives.length > 0 ? (
        <S.ListProcessosUl>
          {processActives.map((processo) => {
            return (
              <S.ListProcessosLi key={processo.FASE_PROCESSUAL}>
                <S.ListItemProcesso>
                  <S.ListItemProcessoInfo>
                    <S.ListItemTitleProcesso>{processo.FASE_PROCESSUAL}</S.ListItemTitleProcesso>
                    <S.ListItemPorcentagemProcesso>
                      {calcularPorcentagem(processo.Qtd).toFixed(0)}%
                    </S.ListItemPorcentagemProcesso>
                  </S.ListItemProcessoInfo>
                  <S.Chart percentual={calcularPorcentagem(processo.Qtd).toFixed(0)} />
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
