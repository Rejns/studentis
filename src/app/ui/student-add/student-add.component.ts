import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() modalRef: NgbModalRef;
  subjects: String[];
  formSubmitted = false;
  studentAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) { }


  ngOnInit() {
    // TODO: create service for subjects
    this.subjects = ['Maths', 'Maths2', 'English'];

    // reset inputs on dialog open
    this.studentAddForm = this.formBuilder.group({
      studentName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.maxLength(30)])],
      studentSubject: [null, Validators.required]
    });
  }


  /** Adds new student to the DB */
  addStudent() {
    this.formSubmitted = true;

    if (this.studentAddForm.invalid) {
      return;
    }

    this.studentService.createStudent({
      id: null,
      name: this.f.studentName.value,
      subject: this.f.studentSubject.value
    }).subscribe(() => {
      this.modalRef.close();
    });
  }


  /** Close modal */
  close() {
    this.modalRef.close();
  }


  /** Helper for easier form field access */
  get f() {
    return this.studentAddForm.controls;
  }

}
