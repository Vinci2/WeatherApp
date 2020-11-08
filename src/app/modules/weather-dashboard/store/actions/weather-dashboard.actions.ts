import { createAction, props } from '@ngrx/store';

export const fetchWeatherData = createAction('[Weather dashboard] fetch weather data');
export const fetchWeatherDataSuccess = createAction('[Weather dashboard] fetch weather data success', props<{cities: any}>());
export const fetchWeatherDataFail = createAction('[Weather dashboard] fetch weather data fail');
