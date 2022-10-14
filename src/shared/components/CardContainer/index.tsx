import { FC } from 'react';

import * as S from './styles';

type PropsCard = { children: JSX.Element };

const CardContainer: FC<PropsCard> = ({ children }) => {
  return (
    <S.Container>
      <S.Content id="card-container">{children}</S.Content>
    </S.Container>
  );
};

export default CardContainer;
