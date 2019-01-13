import {Component, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {StudentService} from '../../services/student.service';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentAddComponent} from '../student-add/student-add.component';
import {StudentDeleteComponent} from '../student-delete/student-delete.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [StudentEditComponent]
})
export class OverviewComponent implements OnInit {

  data: Student[];
  page = 1;
  resultsPerPage = 20;
  collectionSize = null;
  modalRef: NgbModalRef;

  constructor(private studentService: StudentService,
              private modalService: NgbModal) {}


  ngOnInit() {
    this.getStudents();
  }


  /** Handler for page change. Gets students for the current page */
  onPageChange(): any {
    this.getStudents();
  }


  /** Gets a list of students and simulates pagination */
  getStudents(): void {
    this.studentService.getStudents({ page: this.page, resultsPerPage: this.resultsPerPage }).subscribe(result => {
      // in real world application pagination happens on the backend
      // for simplicity we will do it on the client side, though doesn't really make sense
      // collection size should be returned from the server
      this.collectionSize = result.length;
      this.data =  result.slice((this.page - 1) * this.resultsPerPage, this.page * this.resultsPerPage);
    }, (err) => {
      // TODO: handle error response
    });
  }


  /** Deletes student from the DB after user confirmation */
  delete(student: Student): void {
    this.modalRef = this.modalService.open(StudentDeleteComponent);
    this.modalRef.componentInstance.student = student;
    this.modalRef.componentInstance.modalRef = this.modalRef;
    this.modalRef.result.then(() => {
      this.getStudents();
    }, () => {});
  }


  /** Opens dialog for editing student and on success refreshes student list */
  openStudentEditDialog(student: Student) {
    this.modalRef = this.modalService.open(StudentEditComponent);
    this.modalRef.componentInstance.student = student;
    this.modalRef.componentInstance.subject = student.subject;
    this.modalRef.componentInstance.modalRef = this.modalRef;
    this.modalRef.result.then(() => {
      this.getStudents();
    });
  }


  /** Opens dialog for adding a student and on success refreshes student list */
  openStudentAddDialog() {
    this.modalRef = this.modalService.open(StudentAddComponent);
    this.modalRef.componentInstance.modalRef = this.modalRef;
    this.modalRef.result.then(() => {
      this.getStudents();
    });
  }

}
