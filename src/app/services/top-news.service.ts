import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { topStoriesUrl, itemUrl } from '../NewsUrl';

@Injectable({
  providedIn: 'root'
})
export class TopNewsServiceService {

  constructor(private http: HttpClient) { }

  getTopNews(): Observable<number[]> {
    return this.http.get<number[]>(topStoriesUrl);
  }

  getTopNewsById(storyId: number): Observable<any> {
    return this.http.get(`${itemUrl}/${storyId}.json`);
  }
}
