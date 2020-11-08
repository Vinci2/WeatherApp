import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss']
})
export class CitiesWeatherComponent implements OnInit {
  @Input() citiesData: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
