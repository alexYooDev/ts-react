import React from 'react';
import CounterContainer from './containers/CounterContainer';
import { Routes, Route } from 'react-router-dom';
import Showcase from './components/Showcase';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Showcase />} />
      <Route path='/counter' element={<CounterContainer />} />
    </Routes>
  );
};

export default App;
