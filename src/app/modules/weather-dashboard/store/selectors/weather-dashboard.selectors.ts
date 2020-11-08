import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherDashboardFeatureKey, WeatherDashboardState } from '../reducers/weather-dashboard.reducer';

const weatherDashboardRoot = createFeatureSelector<WeatherDashboardState>(WeatherDashboardFeatureKey);

export const getIsFetchingData = createSelector(weatherDashboardRoot, (state) => state.isFetchingData);
export const getSelectedCity = createSelector(weatherDashboardRoot, (state) => state.selectedCity);
export const getCitiesData = createSelector(weatherDashboardRoot, (state) => state.citiesData);

