import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api/api';



type ForecastCard = {
    status: 'loading' | 'error' | 'idle' | 'finished',
    card: object | string,
}

const initialState:ForecastCard = {
    status: 'idle',
    card: `Hello!
           How is it going?
           Enter the city and
           check the weather!`,
}

export const getWeatherInfo = createAsyncThunk<
    object,
    string
    >(
    'forecast/getWeatherInfo',
    async (city)=> {
        const response = await api.getInfo(city)

        return response.data
        }
)

const forecastSlice = createSlice({
    name:'forecast',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
       builder
           .addCase(getWeatherInfo.pending, state => {
               state.status = 'loading';
           })
           .addCase(getWeatherInfo.fulfilled, (state,action) => {
               state.status = 'finished';
               state.card = action.payload
           })
           .addCase(getWeatherInfo.rejected, state=> {
               state.status = 'error';
           })

    }
})

export default forecastSlice.reducer
