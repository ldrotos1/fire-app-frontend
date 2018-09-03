import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationAutocompleteComponent } from './station-autocomplete.component';

describe('StationAutocompleteComponent', () => {
  let component: StationAutocompleteComponent;
  let fixture: ComponentFixture<StationAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
