import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-list-ads',
  templateUrl: './list-ads.component.html',
  styleUrls: ['./list-ads.component.scss']
})
export class ListAdsComponent implements OnInit {

  articles: Object;
  user: any;
  status: any;
  searchText;
  pageSize = 16;
  page = 1;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    console.log(this.status);

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
