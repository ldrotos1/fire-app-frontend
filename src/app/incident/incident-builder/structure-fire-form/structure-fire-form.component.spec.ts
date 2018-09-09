import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFireFormComponent } from './structure-fire-form.component';

describe('StructureFireFormComponent', () => {
  let component: StructureFireFormComponent;
  let fixture: ComponentFixture<StructureFireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureFireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
