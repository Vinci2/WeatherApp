import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherForecastComponent implements OnInit {
  @Input() weatherForecast: any;
  @Input() cityName: string;

  constructor() { }

  ngOnInit(): void {
  }

  public computeTime(msec): any {
    const time = new Date(msec * 1000);
    return time;
    return time.getHours() + ':00';
  }

}
