import { Injectable } from '@angular/core';
import * as WeatherDashboardSelectors from '../store/selectors/weather-dashboard.selectors';
import * as WeatherDashboardActions from '../store/actions/weather-dashboard.actions';
import { Store } from '@ngrx/store';


@Injectable({ providedIn: 'root' })
export class WeatherDashboardStateService {
    public isFetchingData$ = this.store.select(WeatherDashboardSelectors.getIsFetchingData);
    public selectedCity$ = this.store.select(WeatherDashboardSelectors.getSelectedCity);
    public citiesData$ = this.store.select(WeatherDashboardSelectors.getCitiesData);

    constructor(private store: Store) { }

    public fetchCitiesData(): void {
        this.store.dispatch(WeatherDashboardActions.fetchWeatherData());
    }
}