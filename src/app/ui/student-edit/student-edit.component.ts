import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';
import {Subject} from '../../entities/subject';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {V} from '@angular/core/src/render3';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @Input() student: Student;
  @Input() modalRef: NgbModalRef;
  subjects: any;
  studentEditForm: FormGroup;

  constructor(private studentService: StudentService,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.studentEditForm = this.formBuilder.group({
      subject0: [null],
      subject1: [null],
      subject2: [null],
      mark0: [null, Validators.compose([Validators.min(1), Validators.max(10)])],
      mark1: [null, Validators.compose([Validators.min(1), Validators.max(10)])],
      mark2: [null, Validators.compose([Validators.min(1), Validators.max(10)])]
    });

    this.subjects = this.student.subject;
  }


  /** Prevent form submit if grade number invalid. Update existing student on success close modal */
  save() {
    if (this.studentEditForm.invalid) {
      return;
    }

    this.studentService.updateStudent({
      id: this.student.id,
      name: this.student.name,
      subject: this.subjects
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
    return this.studentEditForm.controls;
  }
}
