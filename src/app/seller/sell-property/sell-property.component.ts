import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-sell-property',
  templateUrl: './sell-property.component.html',
  styleUrls: ['./sell-property.component.scss']
})
export class SellPropertyComponent implements OnInit {

  mypro: Object;
  user: any;
  searchText;

  constructor(
    private service: ServerService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);

    this.getMypro();
  }


  // อสังหาที่ประกาศ
  getMypro() {
    this.service.getMypro(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.mypro = res;
        console.log(this.mypro);
       
      }
    )
  }
}
