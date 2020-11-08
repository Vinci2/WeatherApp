import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDescriptionComponent } from './wind-description.component';

describe('WindDescriptionComponent', () => {
  let component: WindDescriptionComponent;
  let fixture: ComponentFixture<WindDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
