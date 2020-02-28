import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.scss']
})
export class SuggestionListComponent implements OnInit {

  mypro: Object;
  user: any;
  searchText;

  constructor(
    private service: ServerService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();


    this.getMypro();
  }


  // อสังหาที่ประกาศ
  getMypro() {
    this.service.getMypro(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.mypro = res;

      }
    )
  }

}
