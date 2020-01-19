import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upgrad-member',
  templateUrl: './upgrad-member.component.html',
  styleUrls: ['./upgrad-member.component.scss']
})
export class UpgradMemberComponent implements OnInit {

  @ViewChild('delect', { static: false }) delect: ElementRef;
  @ViewChild('upgrade', { static: false }) upgrade: ElementRef;
  lists: Object;
  requp_id: any;
  requp_id1: any;
  limit_id: any;
  email_id: any;
  requp: any;
  cou: any;
  searchText;



  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NgbModal,
  ) { }

  ngOnInit() {
    this.getListUpgrade();
    this.getCountup();
  }

  getListUpgrade() {
    this.service.getUpgradeReq().subscribe(
      (res) => {
        console.log(res);

        this.lists = res;

      })
  }

  // นับรายการ
  getCountup() {
    this.service.getCountUp().subscribe(
      (res) => {
        console.log(res);
        this.cou = res[0].countup;

      })

  }

  closeModal() {
    this.modalService.dismissAll();
  }
  // Modal 
  openModalUpgrade(data, modal) {
    console.log(data);
    this.limit_id = data.limit_id;
    this.email_id = data.email_id;
    this.requp_id = data.requp_id;
    this.modal.open(modal, { centered: true })
  }

  onUpdateprofile() {
    const data = {
      limit_id: this.limit_id,
      email_id: this.email_id
    }
    console.log(data)
    this.service.postProLimit(data).subscribe(
      async (res) => {
        this.modalService.open(this.upgrade);
        await delay(2000);
        this.onDeleteupgrade();
        this.closeModal();
        location.reload();

      }
    )
  }

  // delete
  openModalUpDelete(data, modal) {
    console.log(data);
    this.requp_id = data.requp_id;

    this.modal.open(modal, { centered: true })
  }


  onDeleteupgrade() {
    const data = this.requp_id
    console.log(data);
    this.service.deleteReqUpgerde(data).subscribe(
      async (res) => {
        this.modalService.open(this.delect)

        await delay(1000);
        this.closeModal();
        location.reload();
      }
    )
  }

}
