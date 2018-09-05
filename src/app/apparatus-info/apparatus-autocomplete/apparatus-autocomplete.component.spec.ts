import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusAutocompleteComponent } from './apparatus-autocomplete.component';

describe('ApparatusAutocompleteComponent', () => {
  let component: ApparatusAutocompleteComponent;
  let fixture: ComponentFixture<ApparatusAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
