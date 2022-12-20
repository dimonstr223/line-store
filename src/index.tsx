import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import App from './App'
import store, { persistor } from './redux/store'
import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<HashRouter>
				<App />
			</HashRouter>
		</PersistGate>
	</Provider>
)

reportWebVitals()
