import styled from 'styled-components';
import { Typography, TextField, Paper, Button, InputAdornment, Alert } from '@mui/material';

export const Container = styled(Paper)`
  align-items: center;
  border-radius: 20px;
  display: flex;
  background: white;
  flex-direction: column;
  padding: 20px;
  max-width: 20vw;
`;

export const Logo = styled.img`
  height: auto;
  width: 280px;
`;

export const TitleLogin = styled(Typography)`
  color: ${(props) => props.theme.color.beelegal};
  padding-bottom: 40px;
`;

export const ContainerField = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputField = styled(TextField)`
  border-color: ${(props) => props.theme.color.beelegal} !important;
  border-radius: 4px;
  width: 100%;
`;

export const IconUsers = styled(InputAdornment)`
  color: ${(props) => props.theme.color.beelegal};
`;

export const ButtonEntrar = styled(Button)`
  background-color: ${(props) => props.theme.color.primary10} !important;
  width: 100%;
`;

export const AlertMsg = styled(Alert)``;
