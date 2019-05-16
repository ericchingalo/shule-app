import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsByCategoryComponent } from './schools-by-category.component';

describe('SchoolsByCategoryComponent', () => {
  let component: SchoolsByCategoryComponent;
  let fixture: ComponentFixture<SchoolsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
