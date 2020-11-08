import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIconComponent implements OnInit {

  @Input() iconCode: string;

  constructor() { }

  ngOnInit(): void {
  }

  public computeIconSrc(): string {
    return `http://openweathermap.org/img/wn/${this.iconCode}@2x.png`;
  }
}
