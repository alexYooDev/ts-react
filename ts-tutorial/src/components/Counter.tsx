import * as React from 'react';

interface Props {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface State {
  counter: number;
}

const Counter: React.FC<Props> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>카운터</h1>
      <h3>{value}</h3>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
