import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIconComponent {
  @Input() iconCode: string;

  public computeIconSrc(): string {
    return `http://openweathermap.org/img/wn/${this.iconCode}@2x.png`;
  }
}
