import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassCasualtyFormComponent } from './mass-casualty-form.component';

describe('MassCasualtyFormComponent', () => {
  let component: MassCasualtyFormComponent;
  let fixture: ComponentFixture<MassCasualtyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassCasualtyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassCasualtyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
