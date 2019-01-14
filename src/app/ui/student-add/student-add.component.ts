import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from '../../entities/subject';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() modalRef: NgbModalRef;
  subjectsGroup1: Subject[];
  subjectsGroup2: Subject[];
  subjectsOptional: Subject[];
  formSubmitted = false;
  studentAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) { }


  ngOnInit() {
    // TODO: create service for subjects

    // mandatory subjects
    this.subjectsGroup1 = [
      { id: 1, name: 'Maths' },
      { id: 2, name: 'Computer science'}
    ];

    this.subjectsGroup2 = [
      { id: 3, name: 'English' },
      { id: 4, name: 'Physics'}
    ];

    // optional subject
    this.subjectsOptional = [
      { id: 5, name: 'Non-duality'},
      { id: 6, name: 'Consciousness'}
    ];

    // reset inputs on dialog open
    this.studentAddForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.maxLength(30)])],
      subject1: [null, Validators.required],
      subject2: [null, Validators.required],
      optional: [null]
    });
  }


  /** Prevents form submit if form invalid and uses student service to create student */
  addStudent() {
    this.formSubmitted = true;

    if (this.studentAddForm.invalid) {
      return;
    }

    this.studentService.createStudent({
      id: null,
      name: this.f.name.value,
      subject: [
        {...this.f.subject1.value, ...{ mark: null }},
        {...this.f.subject2.value, ...{ mark: null }},
        this.f.optional.value ? {...this.f.optional.value, ...{ mark: null }} : null
      ]
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
