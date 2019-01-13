import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  @Input() student: Student;
  @Input() modalRef: NgbModalRef;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }


  /** User confirmed student deletion. Delete user from DB and on success close dialog */
  confirm() {
    this.studentService.deleteStudent(this.student.id).subscribe(() => {
      this.modalRef.close();
    });
  }


  /** Dismiss dialog */
  cancel() {
    this.modalRef.dismiss();
  }

}
