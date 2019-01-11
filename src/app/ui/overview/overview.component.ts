import { Component, OnInit } from '@angular/core';
import {Student} from '../../entities/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  data: Student[];
  page = 1;
  resultsPerPage = 20;
  collectionSize = null;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  // lazy load pages
  onPageChange(): any {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents({ page: this.page, resultsPerPage: this.resultsPerPage }).subscribe(result => {
      // in real world application pagination happens on the backend
      // for simplicity we will do it on the client side, though doesn't really make sense
      // collection size should be returned from the server
      this.collectionSize = result.length;
      this.data =  result.slice((this.page - 1) * this.resultsPerPage, this.page * this.resultsPerPage);
    });
  }

  delete(id: number): void {
    this.studentService.deleteStudent(id).subscribe(result => {
      this.getStudents();
    });
  }

  openStudentEdit() {

  }

}
