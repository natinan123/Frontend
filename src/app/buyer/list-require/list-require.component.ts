import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-list-require',
  templateUrl: './list-require.component.html',
  styleUrls: ['./list-require.component.scss']
})
export class ListRequireComponent implements OnInit {
  @ViewChild('delect', { static: false }) delect: ElementRef;


  require: Object;
  user: any;

  type_name: any;
  req_id: any;


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

  // delete
  openModalReq(data, modal) {
    console.log(data);
    this.type_name = data.type_name;
    this.req_id = data.req_id;
    this.modal.open(modal, { centered: true })
  }

  onDeleteLReq() {
    this.service.deleteReq(this.req_id).subscribe(
      async (res) => {
        this.modalService.open(this.delect)
        this.getRequire();
        await delay(2000);
        this.modalService.dismissAll();

      }
    )
  }




}
