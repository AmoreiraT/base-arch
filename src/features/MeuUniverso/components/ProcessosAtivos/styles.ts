import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  margin-bottom: 44px;
`;

export const TotalProcessos = styled.span`
  color: ${(props) => props.theme.color.primary10};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const TitleCard = styled.span`
  color: #3f4254;
  font-family: 'Poppins', sans-serif;
  line-height: 24px;
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;

export const ListProcessosUl = styled.ul``;
export const ListProcessosLi = styled.li`
  list-style: none;
`;

export const ListItemProcesso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListItemProcessoInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ListItemTitleProcesso = styled.span`
  color: #1c1b1f;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

export const ListItemPorcentagemProcesso = styled.span`
  color: #1c1b1f;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

export const Chart = styled.div.attrs((props: { percentual: string }) => props)`
  position: relative;
  background: #1e4072;
  border-radius: 5px;
  margin-top: 8px;
  height: 6px;
  width: ${(props) => `${props.percentual}%`};
`;

export const BackgroundChart = styled.div`
  background: #ddf4fe;
  border-radius: 5px;
  margin-top: -6px;
  margin-bottom: 16px;
  height: 6px;
  width: 100%;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 100%;
  width: 100%;
`;
