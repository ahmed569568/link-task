import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsList: any;
  public data = [
    {
      url: '../../assets/images/header-1.jpg',
      title: 'Al Foundation',
      subTitle: 'is focused on inspiring the next generation of kids Healthcare professionals.',
    },
    {
      url: '../../assets/images/header-2.jpg',
      title: 'Al Foundation',
      subTitle: 'is focused on inspiring the next generation of kids Healthcare professionals.',
    },
    {
      url: '../../assets/images/header-3.jpg',
      title: 'Al Foundation',
      subTitle: 'is focused on inspiring the next generation of kids Healthcare professionals.',
    },
  ];

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
