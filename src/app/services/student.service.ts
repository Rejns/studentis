import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Student} from '../entities/student';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  headers: HttpHeaders;
  url: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.url = 'api/students';
  }


  /** Gets a list of students */
  getStudents (pages): any {
    return this.http.get(this.url, { params: new HttpParams().set('pages', pages) }).pipe(
      catchError(this.handleError)
    );
  }


  /** Adds student to the db */
  createStudent (student: Student): any {
    return this.http.post('api/students', student, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }


  /** Deletes student from the db */
  deleteStudent (id: number): any {
    const url = this.url + `/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }


  /** Update existing student */
  updateStudent (student: Student): any {
    return this.http.put(this.url, student, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }


  /** Logs error response and returns RxJS ErrorObservable with user friendly error message for service consumer */
  handleError(error: HttpErrorResponse) {
    // TODO: log errors
    return throwError({ message: 'something went wrong' });
  }
}
