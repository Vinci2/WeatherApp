import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDashboardStateService } from '../../services/weather-dashboard-state.service';

@Component({
  selector: 'app-weather-dashboard-main-container',
  templateUrl: './weather-dashboard-main-container.component.html',
  styleUrls: ['./weather-dashboard-main-container.component.scss']
})
export class WeatherDashboardMainContainerComponent implements OnInit {

  public citiesData$: Observable<any[]>;

  constructor(private weatherDashboardStateService: WeatherDashboardStateService) { }

  ngOnInit(): void {
    this.citiesData$ = this.weatherDashboardStateService.citiesData$;
    this.weatherDashboardStateService.fetchCitiesData();
  }

}
