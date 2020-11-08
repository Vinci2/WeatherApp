import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { WeatherDashboardHttpService } from '../../services/weather-dashboard-http.service';
import * as WeatherDashboardSelectors from '../selectors/weather-dashboard.selectors';
import * as WeatherDashboardActions from '../actions/weather-dashboard.actions';

@Injectable()
export class WeatherDashboardEffects {
    public fetchWetherData$ = createEffect(() => this.actions$.pipe(
        ofType(WeatherDashboardActions.fetchWeatherData),
        switchMap(() => this.weatherDashboardHttpService.fetchWeatherData().pipe(
            map(({ list }) => {
                return WeatherDashboardActions.fetchWeatherDataSuccess({ cities: list });
            }),
            catchError(() => {
                return of(WeatherDashboardActions.fetchWeatherDataFail());
            })
        ))
    ));

    public selectedCity$ = createEffect(() => this.actions$.pipe(
        ofType(WeatherDashboardActions.selectCity),
        withLatestFrom(this.store.select(WeatherDashboardSelectors.getCitiesForecast)),
        map(([{ city }, citiesForecast]) => {
            return citiesForecast[city.cityId]
                ? WeatherDashboardActions.checkForecast({ city })
                : WeatherDashboardActions.fetchCityForecast({ city });
        })
    ));

    // public checkForecast$ = createEffect(() => {     // TO DO effect that could check if data refresh is needed;
    //     return this.actions$.pipe(
    //         ofType(WeatherDashboardActions.checkForecast),
    //         filter()
    //         map(() => EMPTY)
    //     )
    // })

    public fetchCityForeCast$ = createEffect(() => this.actions$.pipe(
        ofType(WeatherDashboardActions.fetchCityForecast),
        switchMap(({ city }) => this.weatherDashboardHttpService.fetchCityForecast(city).pipe(
            map((data) => {
                return WeatherDashboardActions.fetchCityForecastSuccess({ cityForecast: data });
            }),
            catchError(() => {
                return of(WeatherDashboardActions.fetchCityForecastFail());
            })
        ))
    ));

    constructor(private actions$: Actions, private weatherDashboardHttpService: WeatherDashboardHttpService, private store: Store) { }
}
