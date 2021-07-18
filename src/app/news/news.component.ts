import { Component, OnInit } from '@angular/core';
import { NewsService } from '@app/services/news.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList: any;
  model: NgbDateStruct;

  constructor(private newsServices: NewsService) {}

  ngOnInit() {
    this.getNewsList();
  }
  getNewsList() {
    this.newsServices.getNews().subscribe((res) => {
      console.log(res, 'im res');
      this.newsList = res;
    });
  }
}
