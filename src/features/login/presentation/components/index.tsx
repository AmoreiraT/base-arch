import React, { useState } from 'react';

import * as S from './styles';
import logo from './../../../../res/images/png/logo-rc.png';
import { LoginCommand } from './../../domain/commands/login-command';

const FormLogin = (): JSX.Element => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async function (e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    let cmd: LoginCommand;
    const data = await cmd!.repo.call(userName, password);

    if (data.error) {
      return alert(data.error);
    }
    console.log(data);
    // const auth_ticket: string = data.data.auth_ticket;
  };

  return (
    <S.Container variant="elevation" elevation={5}>
      <S.Logo src={logo} />
      <S.TitleLogin variant="h5">Faça o login</S.TitleLogin>
      <form onSubmit={handleLogin}>
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
