import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityDescriptor } from '../../models/weather-dashboard-models';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherCardComponent {
  @Input() cityData: any;
  @Input() cardTitle: string;
  @Input() isSelected: boolean;

  @Output() selectCity = new EventEmitter<CityDescriptor>();

  public onSelectCity(): void {
    this.selectCity.emit({ cityId: this.cityData.id, ...this.cityData.coord, name: this.cityData.name });
  }

}
