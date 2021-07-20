import { Injectable } from '@angular/core';
import data from '../../assets/resources/db.json';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  getNews() {
    return data.articles;
  }
}
