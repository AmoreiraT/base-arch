import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 352px;
  height: 288px;
  resize: both;
  overflow: hidden;
  background: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
    height: 16px;
    background: #ddf4fe;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e4072;
    border: 2px solid #ddf4fe;
    border-radius: 8px;
  }
`;
