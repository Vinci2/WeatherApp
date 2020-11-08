import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDescriptionComponent } from './temperature-description.component';

describe('TemperatureDescriptionComponent', () => {
  let component: TemperatureDescriptionComponent;
  let fixture: ComponentFixture<TemperatureDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
