import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { CityDescriptor } from '../../models/weather-dashboard-models';
import { WeatherDashboardStateService } from '../../services/weather-dashboard-state.service';

@Component({
  selector: 'app-weather-dashboard-main-container',
  templateUrl: './weather-dashboard-main-container.component.html',
  styleUrls: ['./weather-dashboard-main-container.component.scss']
})
export class WeatherDashboardMainContainerComponent implements OnInit {
  public citiesData$: Observable<any[]>;
  public cityForecast$: Observable<any>;
  public selectedCity$: Observable<CityDescriptor>;

  constructor(private weatherDashboardStateService: WeatherDashboardStateService) { }

  ngOnInit(): void {
    this.citiesData$ = this.weatherDashboardStateService.citiesData$;
    this.selectedCity$ = this.weatherDashboardStateService.selectedCity$;
    this.weatherDashboardStateService.fetchCitiesData();
    this.cityForecast$ = this.weatherDashboardStateService.citiesForecast$;
  }

  public onSelectCity(city: CityDescriptor): void {
    this.weatherDashboardStateService.selectCity(city);
  }
}
