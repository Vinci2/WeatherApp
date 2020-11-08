import { createReducer, on } from '@ngrx/store';
import { CityDescriptor } from '../../models/weather-dashboard-models';
import * as WeatherDashboardActions from '../actions/weather-dashboard.actions';

export const WeatherDashboardFeatureKey = 'weatherDashboard';

export interface WeatherDashboardState {
    citiesData: any;
    selectedCity: CityDescriptor;
    citiesForecast: any;
    isFetchingData: boolean;
}

const weatherInitialState: WeatherDashboardState = {
    citiesData: [],
    citiesForecast: {},
    selectedCity: null,
    isFetchingData: false
};


export const weatherDashboardReducer = createReducer(
    weatherInitialState,
    on(WeatherDashboardActions.fetchWeatherData, state => ({ ...state, isFetchingData: true })),
    on(WeatherDashboardActions.selectCity, (state, action) => ({ ...state, selectedCity: action.city })),
    on(WeatherDashboardActions.fetchWeatherDataSuccess, (state, action) => (
        {
            ...state,
            isFetchingData: false,
            citiesData: action.cities
        })),
    on(WeatherDashboardActions.fetchCityForecastSuccess, (state, action) => ({
        ...state,
        citiesForecast: action.cityForecast
    }))
);
