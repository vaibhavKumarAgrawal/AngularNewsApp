import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { topStoriesUrl ,itemUrl} from '../NewsUrl';

@Injectable({
  providedIn: 'root'
})
export class TopNewsServiceService {

  constructor(private http: HttpClient) { }

  getTopNews() {
    return this.http.get(topStoriesUrl);
  }

  getTopNewsById(storyId: number) {
    return this.http.get(`${itemUrl}/${storyId}.json`);
  }
}
