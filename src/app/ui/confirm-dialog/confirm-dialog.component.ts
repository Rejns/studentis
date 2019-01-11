import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../entities/student';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() student: Student;
  @Input() modalRef: NgbModalRef;

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    this.modalRef.close();
  }

  cancel() {
    this.modalRef.dismiss();
  }

}
