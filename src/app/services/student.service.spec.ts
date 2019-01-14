import {TestBed, inject} from '@angular/core/testing';
import {StudentService} from './student.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Data} from '@angular/router';
import {Student} from '../entities/student';

describe('StudentService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [StudentService]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));

  it('should return students', inject([StudentService], (service: StudentService) => {
    const testData: Student[] = [{id: 1, name: 'Test Student', subject: [ { id: 1, name: 'Maths', mark: null}]}];

    // Make an HTTP GET request
    httpClient.get<Data>(service.url)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('api/students');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  }));
});
