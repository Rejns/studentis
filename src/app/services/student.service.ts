import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Student} from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


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
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(
      catchError((err) => {
        return err;
      })
    );
  }


  /** Deletes student from the db */
  deleteStudent (id: number): any {
    const url = `/api/students/${id}`;

    return this.http.delete(url, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(
      catchError((err) => {
        return err;
      })
    );
  }


  /** Update existing student */
  updateStudent (student: Student): any {
    return this.http.put('api/students', student,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(
      catchError((err) => {
        return err;
      })
    );
  }
}
