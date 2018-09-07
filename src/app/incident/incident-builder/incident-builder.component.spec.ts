import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBuilderComponent } from './incident-builder.component';

describe('IncidentBuilderComponent', () => {
  let component: IncidentBuilderComponent;
  let fixture: ComponentFixture<IncidentBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
