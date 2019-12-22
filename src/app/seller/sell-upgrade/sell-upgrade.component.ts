import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sell-upgrade',
  templateUrl: './sell-upgrade.component.html',
  styleUrls: ['./sell-upgrade.component.scss']
})
export class SellUpgradeComponent implements OnInit {

  @ViewChild('upgrade', { static: false }) upgrade: ElementRef;
  limit_id: any;
  user: any;
  gold: any = "Gold";
  platinum: any = "Platinum";
  diamond: any = "Diamond";
  My_grade: any;

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
    this.user = this.session.getActiveUser();
    // console.log(this.user);

    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.My_grade = res[0].limit_id;


      }
    )



  }



  closeModal() {
    this.modalService.dismissAll();
  }
  // Modal 
  openModalUpgold(modal, data) {
    this.limit_id = this.gold;
    this.modal.open(modal, { centered: true })
  }

  openModalUpplatinum(modal, data) {
    this.limit_id = this.platinum;
    this.modal.open(modal, { centered: true })
  }

  openModalUpdiamond(modal, data) {
    this.limit_id = this.diamond;
    this.modal.open(modal, { centered: true })
  }

  // insert
  onSubmit() {
    const data = {
      limit_id: this.limit_id,
      email_id: this.user[0].email_id
    }
    console.log(data);
    this.service.postUpgrade(data).subscribe(
      async (res) => {
        this.modalService.open(this.upgrade);
        await delay(1000);
        this.closeModal();
        // this.router.navigate(['seller/seller/selle-property']);
      }
    )
  }



}
