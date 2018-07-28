import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusInfoComponent } from './apparatus-info.component';

describe('ApparatusInfoComponent', () => {
  let component: ApparatusInfoComponent;
  let fixture: ComponentFixture<ApparatusInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
