import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGradeComponent } from './check-grade.component';

describe('CheckGradeComponent', () => {
  let component: CheckGradeComponent;
  let fixture: ComponentFixture<CheckGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
