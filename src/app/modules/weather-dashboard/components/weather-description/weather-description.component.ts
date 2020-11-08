import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss']
})
export class WeatherDescriptionComponent implements OnInit {
  @Input() windData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
