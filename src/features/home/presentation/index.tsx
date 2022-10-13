import React from 'react';
import { FC } from 'react';
import SideBar from '../../../shared/components/SideBar';
import * as S from './styles';
type Props = { children: JSX.Element };

const Home: FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <>
        <SideBar>{children}</SideBar>
      </>
    </S.Container>
  );
};

export default Home;
