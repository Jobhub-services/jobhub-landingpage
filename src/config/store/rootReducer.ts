import { combineReducers } from 'redux';
import { reducer as appReducer } from '@/modules/store/app.store';
import { reducer as authReducer } from '@/modules/store/auth.store';
const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
