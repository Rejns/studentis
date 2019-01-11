import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, name: 'Windstorm', subject: 'Maths' },
      { id: 2, name: 'Bombasto', subject: 'English' },
      { id: 3, name: 'Magneta', subject: 'Maths' },
      { id: 4, name: 'Tornado', subject: 'Maths2' },
      { id: 5, name: 'Tornado', subject: 'Maths' },
      { id: 6, name: 'Tornado', subject: 'Maths' },
      { id: 7, name: 'Tornado', subject: 'Maths' },
      { id: 8, name: 'Tornado', subject: 'Maths' },
      { id: 9, name: 'Tornado', subject: 'Maths2' },
      { id: 10, name: 'Tornado', subject: 'Maths' },
      { id: 11, name: 'Tornado', subject: 'Maths' },
      { id: 12, name: 'Tornado', subject: 'Maths' },
      { id: 13, name: 'Tornadog', subject: 'Maths' },
      { id: 14, name: 'Tornadoe', subject: 'Maths' },
      { id: 15, name: 'Tornadod', subject: 'Maths' },
      { id: 16, name: 'Tornadoc', subject: 'Maths' },
      { id: 17, name: 'Tornadoc', subject: 'Maths' },
      { id: 18, name: 'Tornado', subject: 'Maths2' },
      { id: 19, name: 'Tornado', subject: 'Maths2' },
      { id: 20, name: 'Tornadob', subject: 'Maths' },
      { id: 21, name: 'Tornadoa', subject: 'Maths' },
      { id: 22, name: 'Tornadoa', subject: 'Maths' },
      { id: 23, name: 'Tornado3', subject: 'Maths' },
      { id: 24, name: 'Tornado2', subject: 'Maths' },
      { id: 25, name: 'Tornado1', subject: 'Maths' },
    ];
    return {students};
  }
}
