import styled from 'styled-components';
import { InputAdornment, TextField } from '@mui/material';

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const LogoHeader = styled.img`
  margin-right: 26px;
  height: auto;
  width: 280px;
`;

export const InputField = styled(TextField)`
  display: flex;
  align-self: center;
  justify-self: center;
  background: white;
  border-radius: 4px;
  width: 100%;
`;

export const Icon = styled(InputAdornment)`
  color: #605d62;
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  width: 30%;
`;

export const Avatar = styled.img`
  border-radius: 15px;
  margin-right: 16px;
  height: 30px;
  width: 30px;
`;

export const NameProfile = styled.span`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: white;
`;
