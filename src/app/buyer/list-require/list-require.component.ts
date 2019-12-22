import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-require',
  templateUrl: './list-require.component.html',
  styleUrls: ['./list-require.component.scss']
})
export class ListRequireComponent implements OnInit {


  require: Object;
  user: any;
  req_id: any;
  name: any;
  type_name: any;


  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: Router,

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

    this.getRequire();
  }

  getRequire() {
    this.service.getRequire(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.require = res;
      })
  }

  // Modal 
  openModalReq(modal, data) {
    // this.name = data.type_name
    this.modalService.open(modal, { centered: true })
  }

  // onDeleteLoc() {
  //   const data = {
  //     req_id: this.req_id
  //   }
  //   console.log(data)
  //   this.service.deleteReq(data).subscribe(
  //     async (res) => {
  //       // this.modalService.open(this.success)

  //       await delay(1000);
  //       this.modalService.dismissAll();

  //     }
  //   )
  // }


}
