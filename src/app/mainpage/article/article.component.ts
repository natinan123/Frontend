import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Object;

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
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
