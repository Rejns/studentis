import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Output() studentAdd = new EventEmitter();
  subjects: String[];
  formSubmitted = false;
  studentAddForm: FormGroup;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private studentService: StudentService) { }

  ngOnInit() {
    // TODO: create service for subjects
    this.subjects = ['Maths', 'Maths2', 'English'];
  }

  open(content) {
    // reset inputs on dialog open
    this.studentAddForm = this.formBuilder.group({
      studentName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.maxLength(30)])],
      studentSubject: [null, Validators.required]
    });

    this.formSubmitted = false;

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.studentService.createStudent({
        id: null,
        name: this.f.studentName.value,
        subject: this.f.studentSubject.value
      }).subscribe(result2 => {
        // notify parent component about successful student create to refresh list
        this.studentAdd.emit();
      });
    }, (reason) => {
    });
  }

  save() {
    this.formSubmitted = true;
    if (!this.studentAddForm.valid) {
      return;
    }

    this.modalRef.close();
  }

  get f() {
    return this.studentAddForm.controls;
  }


}
