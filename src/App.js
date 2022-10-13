// https://ncoughlin.com/posts/react-navigation-without-react-router/

import * as ColorComponents from './components/ColorBlocks';
import React from 'react';

const ColorBlock = ({ color }) => {
  const { Red, Green, Blue } = ColorComponents;

  switch (color) {
    case 'red':
      return <Red />;
    case 'green':
      return <Green />;
    case 'blue':
      return <Blue />;
    default:
      return <></>;
  }
};

function App() {
  const [color, setColor] = React.useState('');

  return (
    <>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <ColorBlock color={color} />
    </>
  );
}

export default App;
