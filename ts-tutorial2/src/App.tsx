import React from 'react';
import Greetings from './components/Greeetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample-useReducer';
import { SampleProvider } from './SampleContext';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
      <Greetings name='Alex' onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  );
};

export default App;
