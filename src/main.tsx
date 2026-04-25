import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/config/store';

const { BASE_URL } = STAAK_ENV;

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<PersistGate persistor={persistor} loading={<div>Loading...</div>}>
				<App basename={BASE_URL} />
			</PersistGate>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
