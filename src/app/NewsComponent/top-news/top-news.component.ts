import { Component, Input } from '@angular/core';
import { TopNewsServiceService } from 'src/app/services/top-news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  topStoryIds: number[] = [];
  tableSizes: number[] = [5, 10, 15, 20, 35, 50,100,200];

  @Input() term: string = '';
  @Input() searchTerm: string = '';

  constructor(
    private topStoryService: TopNewsServiceService,
  ) {}

  ngOnInit() {
    this.getStoriesIds();
  }

  getStoriesIds() {
     console.log('top news:' +  this.topStoryIds)
    this.topStoryService.getTopNews().subscribe((idsArray) => {
      this.topStoryIds = idsArray as number[];

      console.log('top news new:' +  this.topStoryIds)
    });
  }

  setStoryIndex(index: number, tableSize: number, page: number) {
    return ((index + 1) % (tableSize + 1)) + tableSize * (page - 1);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStoriesIds();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getStoriesIds();
  }
}