import modules from './modules';
import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(
    modules /* preloadedState */,
    (window as any).__REDUX_DEVTOOLS_EXTENSTION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSTION__()
  );
  return store;
}
