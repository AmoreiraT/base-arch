import React, { useState } from 'react';

import * as S from './styles';
import logo from './../../../../res/images/png/logo-rc.png';
import { Authentication, LoginCommand } from './../../domain/commands/login-command';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../../domain/repository/login-repository-interface';
import { LoginRepositoryImpl } from '../../data/login-repository-impl';
import { IconButton } from '@mui/material';
type Props = {
  authentication: LoginRepositoryInterface;
};
const FormLogin: React.FC<Props> = ({ authentication }: Props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = async (): Promise<LoginModel> => {
    const cmd = new LoginCommand(authentication);
    const response = await cmd.call({
      username: userName,
      password: password
    });
    console.log(response.data);
    return response.data;
  };

  return (
    <S.Container variant="elevation" elevation={5}>
      <S.Logo src={logo} />
      <S.TitleLogin variant="h5">Faça o login</S.TitleLogin>
      <form>
        <S.ContainerField>
          <S.InputField
            type="text"
            variant="outlined"
            id="outlined-basic"
            label="Usuário"
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputProps={{
              endAdornment: <S.IconUsers position="end"></S.IconUsers>
            }}
          />
        </S.ContainerField>
        <S.ContainerField>
          <S.InputField
            type="password"
            variant="outlined"
            id="outlined-basic"
            label="Senha"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: <S.IconUsers position="end"></S.IconUsers>
            }}
          />
        </S.ContainerField>
        <IconButton onClick={doLogin}>Entrar</IconButton>
      </form>
    </S.Container>
  );
};

export default FormLogin;
