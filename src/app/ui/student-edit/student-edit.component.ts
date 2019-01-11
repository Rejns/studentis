import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @Input() student: Student;
  @Input() modalRef: NgbModalRef;
  subjects: String[];
  subject: String;

  constructor(private studentService: StudentService) { }


  ngOnInit() {
    // TODO: create service for subjects
    this.subjects = ['Maths', 'Maths2', 'English'];
    this.subject = this.student.subject;
  }


  /** Update existing student on success close modal */
  save() {
    this.studentService.updateStudent({
      id: this.student.id,
      name: this.student.name,
      subject: this.subject
    }).subscribe(() => {
      this.modalRef.close();
    });
  }


  /** Close modal */
  close() {
    this.modalRef.close();
  }

}
