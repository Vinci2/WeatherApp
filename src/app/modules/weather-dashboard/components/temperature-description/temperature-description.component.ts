import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-description',
  templateUrl: './temperature-description.component.html',
  styleUrls: ['./temperature-description.component.scss']
})
export class TemperatureDescriptionComponent implements OnInit {
  @Input() temperatureData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
