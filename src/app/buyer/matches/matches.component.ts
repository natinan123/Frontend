import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {


  user: any;
  require: Object;
  test1: any;
  req_area_max: any;


  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user)

    this.getRequire();
    this.getReqmatch();

  }

  // get รายการความต้องการ
  getRequire() {
    this.service.getRequire(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.require = res;

      }
    )
  }








  getReqmatch() {
    const data = {
      a: this.user[0].email_id
    }
    console.log(data)
    this.service.getReqMatch(data).subscribe(
      (res) => {
        console.log(res);
        this.require = res;


      })
  }




}
