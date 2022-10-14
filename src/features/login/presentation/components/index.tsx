import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import logo from './../../../../res/images/png/logo-rc.png';
import { LoginCommand } from './../../domain/commands/login-command';
import { LoginRepositoryInterface } from '../../domain/repository/login-repository-interface';
import { IconButton } from '@mui/material';
import { AccountModel } from '../../model/account-model';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../../../core/store';
import { makeRemoteAuthentication } from '../../data/login-repository-impl';

const FormLogin: React.FC = () => {
  const history = useHistory();
  const { globalState, dispatch } = useContext(globalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = userName === '';

  const fakeAuth = {
    authenticate(callback: () => void) {
      setTimeout(callback, 900);
    }
  };

  const doLogin = async (): Promise<AccountModel> => {
    setIsLoading(true);
    const cmd = new LoginCommand(makeRemoteAuthentication());
    const response = await cmd.call({
      username: userName,
      password
    });
    fakeAuth.authenticate(() => {
      dispatch({ type: 'AUTHENTICATE_USER', payload: true });
      dispatch({ type: 'SET_USER', payload: response.data });
    });
    console.log(globalState.isUserAuthenticated);
    console.log(globalState.loggedUser);
    history.replace('/');
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
