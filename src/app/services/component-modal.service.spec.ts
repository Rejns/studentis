import { TestBed, inject } from '@angular/core/testing';

import { ComponentModalService } from './component-modal.service';

describe('ComponentModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentModalService]
    });
  });

  it('should be created', inject([ComponentModalService], (service: ComponentModalService) => {
    expect(service).toBeTruthy();
  }));
});
