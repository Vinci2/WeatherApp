import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDashboardMainContainerComponent } from './containers/weather-dashboard-main-container/weather-dashboard-main-container.component';
import { StoreModule } from '@ngrx/store';
import { WeatherDashboardFeatureKey, weatherDashboardReducer } from './store/reducers/weather-dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherDashboardEffects } from './store/effects/weather-dashboard.effects';
import { CitiesWeatherComponent } from './components/cities-weather/cities-weather.component';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';
import { CityWeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { MatCardModule } from '@angular/material/card';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { WindDescriptionComponent } from './components/wind-description/wind-description.component';
import { MatIconModule } from '@angular/material/icon';
import { TemperatureDescriptionComponent } from './components/temperature-description/temperature-description.component';



@NgModule({
  declarations: [
    WeatherDashboardMainContainerComponent,
    CitiesWeatherComponent,
    CityWeatherForecastComponent,
    CityWeatherCardComponent,
    WeatherIconComponent,
    WindDescriptionComponent,
    TemperatureDescriptionComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(WeatherDashboardFeatureKey, weatherDashboardReducer),
    EffectsModule.forFeature([WeatherDashboardEffects]),
    MatCardModule,
    MatIconModule
  ],
  exports: [WeatherDashboardMainContainerComponent]
})
export class WeatherDashboardModule { }
