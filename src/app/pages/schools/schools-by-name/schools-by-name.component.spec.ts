import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsByNameComponent } from './schools-by-name.component';

describe('SchoolsByNameComponent', () => {
  let component: SchoolsByNameComponent;
  let fixture: ComponentFixture<SchoolsByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
