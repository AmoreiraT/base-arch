import { useState } from 'react';

import * as S from './styles';
import './style.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import PageTitle from '../../../shared/components/PageTitle';
import ProcessosAtivos from '../components/ProcessosAtivos';

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyUniverse = (): JSX.Element => {
  const layoutLg = [
    { i: 'a', x: 0, y: 0, w: 4, h: 8 },
    { i: 'b', x: 4, y: 0, w: 4, h: 5 },
    { i: 'c', x: 8, y: 0, w: 4, h: 5 }
  ];
  const layout = { lg: layoutLg };
  const [changes, setChages] = useState(0);
  const [stackWidth, setStackWidth] = useState(window.innerWidth - 100);

  window.addEventListener('resize', () => {
    handleResize();
  });

  const handleResize = () => {
    setStackWidth(window.screen.width - 100);
  };

  const onLayoutChange = () => {
    var c = changes;
    if (c == null) {
      c = 1;
    }
    setChages(c++);
  };

  return (
    <S.Container id="my-universe">
      <PageTitle title={'Meu Universo'} />
      <S.BodyContainer>
        <ResponsiveGridLayout
          className="layout"
          rowHeight={30}
          width={stackWidth}
          onLayoutChange={onLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          layouts={layout}
          autoSize={true}
        >
          <div key="a" className="containerMain">
            <div className="content">
              <ProcessosAtivos key="a" />
            </div>
          </div>

          <div key="b" style={{ backgroundColor: '#00f' }}>
            Card de teste
          </div>
          <div key="c" style={{ backgroundColor: 'green' }}>
            Card de teste
          </div>
        </ResponsiveGridLayout>
      </S.BodyContainer>
    </S.Container>
  );
};

export default MyUniverse;
