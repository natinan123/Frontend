import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Object;
  user: any;
  status: any;
  searchText;
  link: string;

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private session: SessionService,

  ) { }

  ngOnInit() {
  

    this.getArticle();



    this.link = '/mainpage/mainpage/artdetail';


  }


  getArticle() {
    this.service.getArtcle().subscribe(
      (res) => {
        console.log(res);

        this.articles = res;

      })
  }

}
