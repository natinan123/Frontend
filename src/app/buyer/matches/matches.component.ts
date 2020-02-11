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
  match: Object;


  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user)

    this.getRequire();
    this.getReqmatchList();

  }

  // get รายการความต้องการ
  getRequire() {
    this.service.getRequire(this.user[0].email_id).subscribe(
      (res) => {
        // console.log(res);
        this.require = res;

      }
    )
  }








  getReqmatchList() {

    this.service.getReqMatch(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.match = res;


      })
  }




}
