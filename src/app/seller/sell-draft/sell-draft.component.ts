import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-sell-draft',
  templateUrl: './sell-draft.component.html',
  styleUrls: ['./sell-draft.component.scss']
})
export class SellDraftComponent implements OnInit {

  user: any;
  prodraft: Object;
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
    this.service.getProDraft(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.prodraft = res;
      
      }
    )
  }

}
