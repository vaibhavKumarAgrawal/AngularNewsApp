import { TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TopNewsServiceService } from './top-news.service';
import { HttpClient } from '@angular/common/http';

describe('TopNewsServiceService', () => {
  let service: TopNewsServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient=TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(TopNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
