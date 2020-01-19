import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-sell-close',
  templateUrl: './sell-close.component.html',
  styleUrls: ['./sell-close.component.scss']
})
export class SellCloseComponent implements OnInit {

  user: any;
  prodclose: any;
  pro_pic: Object;
  searchText;

  constructor(
    private service: ServerService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

    this.getMypro();
  }

  // อสังหาที่ประกาศ
  getMypro() {
    this.service.getProClose(this.user[0].email_id).subscribe(
      (res) => {
        // console.log(res);
        this.prodclose = res;
       
      }
    )
  }

}
