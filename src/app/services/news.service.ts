import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private HttpClient: HttpClient) {}
  getNews() {
    return this.HttpClient.get('http://localhost:3000/articles');
  }
}
