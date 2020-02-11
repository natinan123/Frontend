import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  user: any;
  list_follow: Object;

  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.getProfollow()
  }


  // รายการการติดตาม
  getProfollow() {
    this.service.getProFollow(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.list_follow = res;
      })
  }



}
