import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-sell-edit',
  templateUrl: './sell-edit.component.html',
  styleUrls: ['./sell-edit.component.scss']
})
export class SellEditComponent implements OnInit {

  user: any;
  proedit: Object;

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
    this.service.getProEdit(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.proedit = res;
      }
    )
  }

}
