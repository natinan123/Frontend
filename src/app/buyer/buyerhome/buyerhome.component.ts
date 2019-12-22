import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buyerhome',
  templateUrl: './buyerhome.component.html',
  styleUrls: ['./buyerhome.component.scss']
})
export class BuyerhomeComponent implements OnInit {

  @ViewChild('success', { static: false }) success: ElementRef;

  user: any;

  public updateprofile = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    id_line: new FormControl(''),
    facebook: new FormControl(''),
    cus_detail: new FormControl('')
  })
  fname;
  email_id;
  lname;
  phone;
  id_line;
  facebook;
  cus_detail;
  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,


  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        // console.log(res);
        this.email_id = res[0].email_id;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.phone = res[0].phone;
        this.id_line = res[0].id_line;
        this.facebook = res[0].facebook;
        this.cus_detail = res[0].cus_detail;

      }
    )
    // console.log(this.user);

    // console.log(this.updateprofile.value);

  }

  closeModal() {
    this.modalService.dismissAll();
  }

  // Modal recom
  openModalProfile(modal, user) {
    console.log(this.user);

    this.modalService.open(modal, { centered: true, })
  }

  onUpdateprofile() {
    const data = {
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      id_line: this.id_line,
      facebook: this.facebook,
      cus_detail: this.cus_detail,
      email_id: this.user[0].email_id
    }


    console.log(data)
    this.service.putProfile(data).subscribe(
      async (res) => {
        this.modalService.open(this.success);
        await delay(2000);
        this.closeModal();
        location.reload();
      }
    )
  }



}
