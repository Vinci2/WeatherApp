import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-description',
  templateUrl: './wind-description.component.html',
  styleUrls: ['./wind-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindDescriptionComponent {
  @Input() windData: any;

  public computeWindDirection(): string {
    return `rotate(${this.windData.deg}deg)`;
  }

  public com

}
