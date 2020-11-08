import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-description',
  templateUrl: './temperature-description.component.html',
  styleUrls: ['./temperature-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureDescriptionComponent {
  @Input() temperatureData: any;
}
