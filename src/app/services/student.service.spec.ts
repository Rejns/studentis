import {TestBed, inject} from '@angular/core/testing';
import {StudentService} from './student.service';
import {HttpClientModule} from '@angular/common/http';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [StudentService]
    });
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
