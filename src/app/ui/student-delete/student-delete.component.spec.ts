import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteComponent } from './student-delete.component';
import {HttpClientModule} from '@angular/common/http';

describe('StudentDeleteComponent', () => {
  let component: StudentDeleteComponent;
  let fixture: ComponentFixture<StudentDeleteComponent>;
  const student = {
    id: 1,
    name: 'Renato',
    subject: [{ id: 1, name: 'English', mark: 0}]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        StudentDeleteComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeleteComponent);
    component = fixture.componentInstance;
    component.student = student;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
