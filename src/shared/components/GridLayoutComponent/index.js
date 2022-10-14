import { useState } from 'react';
import GridLayout from 'react-grid-layout';

const GridLayoutComponent = ({ children }) => {
  const [changes, setChages] = useState(0);
  const [stackWidth, setStackWidth] = useState(window.innerWidth - 100);

  window.addEventListener('resize', () => {
    handleResize();
  });

  const handleResize = () => {
    setStackWidth(window.innerWidth - 100);
  };

  const onLayoutChange = () => {
    var c = changes;
    if (c == null) {
      c = 1;
    }
    setChages(c++);
  };

  return (
    <GridLayout
      className="layout"
      cols={12}
      rowHeight={200}
      width={stackWidth}
      onLayoutChange={onLayoutChange}
    >
      {children}
    </GridLayout>
  );
};

export default GridLayoutComponent;
