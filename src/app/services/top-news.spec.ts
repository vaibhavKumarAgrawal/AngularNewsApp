import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TopNewsServiceService } from '../services/top-news.service';
import { topStoriesUrl, itemUrl } from '../NewsUrl';

describe('TopNewsServiceService', () => {
  let service: TopNewsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TopNewsServiceService]
    });
    service = TestBed.inject(TopNewsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve top news', () => {
    const dummyTopNews: number[] = [1, 2, 3];

    service.getTopNews().subscribe((topNews) => {
      expect(topNews).toEqual(dummyTopNews);
    });

    const request = httpMock.expectOne(topStoriesUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyTopNews);

    httpMock.verify();
  });

  it('should retrieve top news by ID', () => {
    const storyId = 1;
    const dummyStory = { title: 'Sample Story' };

    service.getTopNewsById(storyId).subscribe((story) => {
      expect(story).toEqual(dummyStory);
    });

    const request = httpMock.expectOne(`${itemUrl}/${storyId}.json`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyStory);

    httpMock.verify();
  });
});