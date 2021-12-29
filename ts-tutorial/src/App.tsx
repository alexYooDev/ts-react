import CounterContainer from 'containers/CounterContainer';
import * as React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profiles';
import TodoList from './components/TodoList';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Profile name='alex' job='dev' />
        <CounterContainer />
        <TodoList />
      </div>
    );
  }
}

export default App;
