import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSpillFormComponent } from './fuel-spill-form.component';

describe('FuelSpillFormComponent', () => {
  let component: FuelSpillFormComponent;
  let fixture: ComponentFixture<FuelSpillFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelSpillFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelSpillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
