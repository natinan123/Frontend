import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

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
