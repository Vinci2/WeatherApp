import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityDescriptor } from '../../models/weather-dashboard-models';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesWeatherComponent {
  @Input() citiesData: any[];
  @Input() selectedCityId: number;

  @Output() selectCity = new EventEmitter<CityDescriptor>();

  public onSelectCity(city: CityDescriptor): void {
    this.selectCity.emit(city);
  }

}
