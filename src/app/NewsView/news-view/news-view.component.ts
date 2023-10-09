import { Component, Input } from '@angular/core';
import { InputData } from 'src/app/interface/input-data';
import { TopNewsServiceService } from 'src/app/services/top-news.service';



@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {

  @Input() storyId: number = 0;
  @Input() index: number = 0;
  @Input() searchTerm: string = '';

  
  newsData: InputData | null = null;

  constructor(
    private topStoryService: TopNewsServiceService,
  ) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    
    this.topStoryService.getTopNewsById(this.storyId).subscribe((data) => {
      this.newsData = data as InputData;

    });
  }

 

  openNews(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
