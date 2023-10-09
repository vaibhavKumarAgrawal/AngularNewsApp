import { Component, Input, OnInit } from '@angular/core';
import { TopNewsServiceService } from 'src/app/services/top-news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 10;
  topStoryIds: number[] = [];
  tableSizes = [5, 10, 15, 20, 35, 50, 100, 200];

  @Input() term = '';
  @Input() searchTerm = '';

  constructor(private topStoryService: TopNewsServiceService) {}

  ngOnInit() {
    this.getNewsIds();
  }

  getNewsIds() {
    this.topStoryService.getTopNews().subscribe((idsArray: number[]) => {
      this.topStoryIds = idsArray;
   });
 }

  setStoryIndex(index: number, tableSize: number, page: number): number {
    return ((index + 1) % (tableSize + 1)) + tableSize * (page - 1);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getNewsIds();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getNewsIds();
  }
}