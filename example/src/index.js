import React from 'react';
import { render} from 'react-dom';
import ReactDemo from '../../src';
const App = () => (
  <ReactDemo text='我是滚动的文字' repeat={8}/>
);
render(<App />, document.getElementById("root"));