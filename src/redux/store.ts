import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import rootReducer from './rootReducer'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch

export default store
