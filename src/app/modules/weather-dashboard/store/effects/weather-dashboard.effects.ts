import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WeatherDashboardActions from '../actions/weather-dashboard.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WeatherDashboardHttpService } from '../../services/weather-dashboard-http.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherDashboardEffects {
    public fetchWetherData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherDashboardActions.fetchWeatherData),
            switchMap(() => this.weatherDashboardHttpService.fetchWeatherData().pipe(
                map(({list}) => {
                    return WeatherDashboardActions.fetchWeatherDataSuccess({cities: list});
                }),
                catchError(() => {
                    return of(WeatherDashboardActions.fetchWeatherDataFail());
                })
            ))
        );
    });

    constructor(private actions$: Actions, private weatherDashboardHttpService: WeatherDashboardHttpService) { }
}
