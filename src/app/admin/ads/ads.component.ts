import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  articles: Object;

  constructor(
    private service: ServerService,

  ) { }

  ngOnInit() {
    this.getArticle();
  }


  getArticle() {
    this.service.getArtcle().subscribe(
      (res) => {
        console.log(res);

        this.articles = res;

      })
  }

}
