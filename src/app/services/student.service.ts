import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Student} from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }


  /** Gets a list of students */
  getStudents (pages): any {
    return this.http.get('api/students', pages).pipe(
      catchError((err) => {
        return err;
      })
    );
  }


  /** Adds student to the db */
  createStudent (student: Student): any {
    return this.http.post('api/students', student,
      { headers: this.headers }).pipe(
      catchError((err) => {
        return err;
      })
    );
  }


  /** Deletes student from the db */
  deleteStudent (id: number): any {
    const url = `/api/students/${id}`;

    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError((err) => {
        return err;
      })
    );
  }


  /** Update existing student */
  updateStudent (student: Student): any {
    return this.http.put('api/students', student,
    { headers: this.headers }).pipe(
      catchError((err) => {
        return err;
      })
    );
  }
}
