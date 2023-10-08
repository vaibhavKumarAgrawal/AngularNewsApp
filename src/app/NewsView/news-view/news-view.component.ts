import { Component, Input } from '@angular/core';
import { TopNewsServiceService } from 'src/app/services/top-news.service';

interface InputData {
  by: string;
  id: number;
  title: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {

  @Input() storyId: number = 0;
  @Input() index: number = 0;
  @Input() searchTerm: string = '';

  //parentSpinner = this.spinner;
  newsData: InputData | null = null;

  constructor(
    private topStoryService: TopNewsServiceService,
  ) {}

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    //this.spinner.show();

    this.topStoryService.getTopStoryById(this.storyId).subscribe((data) => {
      this.newsData = data as InputData;

      //this.spinner.hide();
    });
  }

 

  openNews(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
