import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NewsViewComponent } from './news-view.component';
import { InputData } from 'src/app/interface/input-data';
import { TopNewsServiceService } from 'src/app/services/top-news.service';

describe('NewsViewComponent', () => {
  let component: NewsViewComponent;
  let fixture: ComponentFixture<NewsViewComponent>;
  let topStoryServiceSpy: jasmine.SpyObj<TopNewsServiceService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TopNewsServiceService', ['getTopNewsById']);

    TestBed.configureTestingModule({
      declarations: [NewsViewComponent],
      providers: [{ provide: TopNewsServiceService, useValue: spy }]
    });

    fixture = TestBed.createComponent(NewsViewComponent);
    component = fixture.componentInstance;
    topStoryServiceSpy = TestBed.inject(TopNewsServiceService) as jasmine.SpyObj<TopNewsServiceService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getNews and set newsData correctly', () => {
    const mockNewsData: InputData = {
      // Define your mock data here
      title: 'Sample Title',
      url: 'www.w3school.com',
      by: '',
      id: 0,
      type: ''
    };

    topStoryServiceSpy.getTopNewsById.and.returnValue(of(mockNewsData));

    component.storyId = 1; // Set the storyId to a specific value for the test
    component.getNews();

    expect(topStoryServiceSpy.getTopNewsById).toHaveBeenCalledWith(component.storyId);

    // Ensure that newsData is set correctly
    fixture.detectChanges();
    expect(component.newsData).toEqual(mockNewsData);
  });
});