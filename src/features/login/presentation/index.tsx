import React from 'react';
import { makeRemoteAuthentication } from '../data/login-repository-impl';
import FormLogin from './components';
import * as S from './styles';

const Login = (): JSX.Element => {
  return (
    <S.Container>
      <FormLogin />
    </S.Container>
  );
};

export default Login;
