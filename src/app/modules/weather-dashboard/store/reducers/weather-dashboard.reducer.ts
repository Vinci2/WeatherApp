import { createReducer, on } from '@ngrx/store';
import * as WeatherDashboardActions from '../actions/weather-dashboard.actions';

export const WeatherDashboardFeatureKey = 'weatherDashboard';


export interface WeatherDashboardState {
    citiesData: any;
    selectedCity: any;
    isFetchingData: boolean;
}

const weatherInitialState: WeatherDashboardState = {
    citiesData: [],
    selectedCity: null,
    isFetchingData: false
}


export const weatherDashboardReducer = createReducer(
    weatherInitialState,
    on(WeatherDashboardActions.fetchWeatherData, state => ({ ...state, isFetchingData: true })),
    on(WeatherDashboardActions.fetchWeatherDataSuccess, (state, action) => (
        {
            ...state,
            isFetchingData: false,
            citiesData: action.cities
        })),

);
