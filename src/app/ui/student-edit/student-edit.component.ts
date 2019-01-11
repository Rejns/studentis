import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../entities/student';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @Input() student: Student;
  @Output() studentUpdate = new EventEmitter();
  subjects: String[];
  subject: String;

  constructor(private modalService: NgbModal,
              private studentService: StudentService) { }

  ngOnInit() {
    // TODO: create service for subjects
    this.subjects = ['Maths', 'Maths2', 'English'];
  }

  open(content) {
    // current student data
    this.subject = this.student.subject;

    this.modalService.open(content).result.then((result) => {
      // in case user confirms changes send new data to backend
      this.studentService.updateStudent({
        id: this.student.id,
        name: this.student.name,
        subject: this.subject
      }).subscribe(result2 => {
        // notify parent component about successful student update to refresh list
        this.studentUpdate.emit();
      });
    }, (reason) => {
    });
  }

}
