import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind-description',
  templateUrl: './wind-description.component.html',
  styleUrls: ['./wind-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindDescriptionComponent implements OnInit {
  @Input() windData: any;

  constructor() { }

  ngOnInit(): void {
  }

  public computeWindDirection(): string {
   return `rotate(${this.windData.deg}deg)`;
  }

}
