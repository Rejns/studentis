import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Student} from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class ComponentModalService {

  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }


  /** Opens dialog which content is StudentEditComponent and sets components member values. */
  openStudentEdit(component: any, student: Student) {
    this.modalRef = this.modalService.open(component);
    this.modalRef.componentInstance.student = student;
    this.modalRef.componentInstance.subject = student.subject;
    this.modalRef.componentInstance.modalRef = this.modalRef;
    return this.modalRef;
  }


  /** Opens dialog which content is StudentAddComponent and sets components member values. */
  openStudentAdd(component: any) {
    this.modalRef = this.modalService.open(component);
    this.modalRef.componentInstance.modalRef = this.modalRef;
    return this.modalRef;
  }

}
