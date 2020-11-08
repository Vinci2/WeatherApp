import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDashboardMainContainerComponent } from './weather-dashboard-main-container.component';

describe('WeatherDashboardMainContainerComponent', () => {
  let component: WeatherDashboardMainContainerComponent;
  let fixture: ComponentFixture<WeatherDashboardMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDashboardMainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDashboardMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
