import { createAction, props } from '@ngrx/store';
import { CityDescriptor } from '../../models/weather-dashboard-models';

export const fetchWeatherData = createAction('[Weather dashboard] fetch weather data');
export const fetchWeatherDataSuccess = createAction('[Weather dashboard] fetch weather data success', props<{ cities: any }>());
export const fetchWeatherDataFail = createAction('[Weather dashboard] fetch weather data fail');

export const selectCity = createAction('[Weather dashboard] selectCity', props<{ city: CityDescriptor}>());
export const checkForecast = createAction('[Weather dashboard] check forecast', props<{ city: CityDescriptor}>());

export const fetchCityForecast = createAction('[Weather dashboard] fetch city forecast', props<{ city: CityDescriptor}>());
export const fetchCityForecastSuccess = createAction('[Weather dashboard] fetch city forecast success', props<{ cityForecast: any }>());
export const fetchCityForecastFail = createAction('[Weather dashboard] fetch city forecastFail');
