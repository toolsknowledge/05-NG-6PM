import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

fdescribe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("check add function available or not",()=>{
    expect(service.add(2,2)).toEqual(4);
  });

});
