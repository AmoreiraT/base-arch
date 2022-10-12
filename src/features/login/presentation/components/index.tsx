import React, { useState } from 'react';

import * as S from './styles';
import logo from './../../../../res/images/png/logo-rc.png';
import { Authentication, LoginCommand } from './../../domain/commands/login-command';
import { LoginModel } from '../../model/login-model';
import { LoginRepositoryInterface } from '../../domain/repository/login-repository-interface';
type Props = {
  authentication: LoginRepositoryInterface;
};
const FormLogin: React.FC<Props> = ({ authentication }: Props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = async (): Promise<LoginModel> => {
    var cmd: LoginCommand;
    const data = await cmd!.repo.auth({
      email: userName,
      password: password
    });
    console.log(data.data);
    return data.data;
  };

  const handleSubmit = async (e: React.SyntheticEvent): Promise<LoginModel> => {
    e.preventDefault();

    const account = await authentication.auth({
      email: userName,
      password: password
    });

    console.log(account);
    return account.data;
  };

  // const handleLogin = async function (e: React.SyntheticEvent): Promise<void> {
  //   var cmd: LoginCommand;
  //   cmd = new LoginCommand(cmd!.repo);

  //   const data = await cmd.call({ user: userName, pass: password } as unknown as LoginModel);

  //   if (data.hasError) {
  //     return alert(data.message);
  //   }
  //   console.log(data);
  //   e.preventDefault();

  //   // const auth_ticket: string = data.data.auth_ticket;
  // };

  return (
    <S.Container variant="elevation" elevation={5}>
      <S.Logo src={logo} />
      <S.TitleLogin variant="h5">Faça o login</S.TitleLogin>
      <form onSubmit={() => handleSubmit}>
        <S.ContainerField>
          <S.InputField
            type="text"
            name="usuario"
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
            name="password"
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
        <S.ButtonEntrar variant="contained" type="submit">
          Entrar
        </S.ButtonEntrar>
      </form>
    </S.Container>
  );
};

export default FormLogin;
