import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTypeSelectorComponent } from './incident-type-selector.component';

describe('IncidentTypeSelectorComponent', () => {
  let component: IncidentTypeSelectorComponent;
  let fixture: ComponentFixture<IncidentTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
