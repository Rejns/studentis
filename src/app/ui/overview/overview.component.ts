import {Component, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {StudentService} from '../../services/student.service';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ComponentModalService} from '../../services/component-modal.service';
import {StudentAddComponent} from '../student-add/student-add.component';

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
              private componentModal: ComponentModalService) {}


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
    });
  }


  /** Deletes student from the DB */
  delete(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }


  /** Opens dialog for editing student and on success refreshes student list */
  openStudentEditDialog(student: Student) {
    this.modalRef = this.componentModal.openStudentEdit(StudentEditComponent, student);
    this.modalRef.result.then(() => {
      this.getStudents();
    });
  }


  /** Opens dialog for adding a student and on success refreshes student list */
  openStudentAddDialog() {
    this.modalRef = this.componentModal.openStudentAdd(StudentAddComponent);
    this.modalRef.result.then(() => {
      this.getStudents();
    });
  }

}
