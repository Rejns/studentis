import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {
        id: 1,
        name: 'Windstorm',
        subject: [
          {
            id: 1,
            name: 'Maths',
            mark: null
          },
          {
            id: 3,
            name: 'English',
            mark: 6
          }
        ]
      },
      {
        id: 2,
        name: 'Windstorm2',
        subject: [
          {
            id: 2,
            name: 'Computer science',
            mark: 9
          },
          {
            id: 4,
            name: 'Physics',
            mark: 9
          }
        ]
      },
      {
        id: 3,
        name: 'Windstorm3',
        subject: [
          {
            id: 1,
            name: 'Maths',
            mark: null
          },
          {
            id: 3,
            name: 'English',
            mark: 5
          }
        ]
      }
    ];
    return {students};
  }
}
