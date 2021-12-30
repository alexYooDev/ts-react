import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

// 루트 리듀서를 내보냄
export default rootReducer;

// 루트 리듀서 반환값을 유추
// 추후 해당 타입을  컨테이너 컴포넌트에서 불러와서 사용해야 함 => 내보낸다.
export type RootState = ReturnType<typeof rootReducer>;
