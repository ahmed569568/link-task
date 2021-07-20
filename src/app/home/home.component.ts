import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsList: any;
  constructor(private newsServices: NewsService) {}

  ngOnInit() {
    this.getNewsList();
  }
  getNewsList() {
    this.newsList = this.newsServices.getNews();
  }
}
