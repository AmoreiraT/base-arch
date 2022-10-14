import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #008bc3;
  height: 80px;
  background: linear-gradient(0deg, #fbfdff, #fbfdff),
    linear-gradient(0deg, rgba(103, 80, 164, 0.08), rgba(103, 80, 164, 0.08));
  padding: 16px 0px 16px 0px;
  gap: 5px;
  width: 100%;
`;

export const Marked = styled.div`
  border-radius: 8px;
  background: #677fbe;
  margin-left: 10px;
  margin-right: 20px;
  height: 16px;
  width: 16px;
`;
