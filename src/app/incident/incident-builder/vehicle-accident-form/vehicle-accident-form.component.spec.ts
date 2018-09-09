import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAccidentFormComponent } from './vehicle-accident-form.component';

describe('VehicleAccidentFormComponent', () => {
  let component: VehicleAccidentFormComponent;
  let fixture: ComponentFixture<VehicleAccidentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAccidentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAccidentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
