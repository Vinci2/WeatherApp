import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss']
})
export class CityWeatherCardComponent implements OnInit {
  @Input() cityData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
