import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusViewComponent } from './apparatus-view.component';

describe('ApparatusViewComponent', () => {
  let component: ApparatusViewComponent;
  let fixture: ComponentFixture<ApparatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
