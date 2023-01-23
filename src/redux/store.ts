import {combineReducers, configureStore} from '@reduxjs/toolkit';
import forecastReducer from './forecastSlice';


const rootReducer = combineReducers({
    forecast: forecastReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

