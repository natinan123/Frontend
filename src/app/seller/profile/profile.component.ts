import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


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
  pro_limit: any;
  count_pro: any;
  avatarname: any;
  pic64: any;
  data: any;
  images: any;
  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,


  ) { }


  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.data = this.user[0].email_id;
    this.showAvatar();
    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.email_id = res[0].email_id;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.phone = res[0].phone;
        this.id_line = res[0].id_line;
        this.facebook = res[0].facebook;
        this.pro_limit = res[0].pro_limit;
        this.cus_detail = res[0].cus_detail;

      }
    )

    // this.pro_limit = this.user[0].limit_id;
    this.getCountPro();

  }

  //  จำนวนอสังหา
  getCountPro() {
    this.service.getCountPro(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res)
        this.count_pro = res[0].count_pro

      }
    )
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


  // รูป avatar
  showAvatar() {
    this.service.getNameAvatar(this.data).subscribe(
      (res) => {
        // console.log(res)
        this.avatarname = res[0].filename,
          this.pic64 = res[0].picBase64
        // console.log(this.pic64);
        // console.log(this.avatarname);
      }
    );
  }

  //  todo : select รูป แบบรูปเดียว ใช้อันนี้
  public imagePath;
  url: any;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result; //add source to image

      }
    }
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  // todo :Button upload image sigle
  onSubmit() {
    var formData = new FormData();
    formData.append('username', this.user[0].email_id);
    formData.append('blogimage', this.images);
    console.log(formData);

    this.service.putAvatar(formData).subscribe(
      (res) => {
        location.reload();
        console.log(res)
      },
      (err) => console.log(err)
    );
  }

  // Modal Avatar
  openModalAvatar(modal, user) {
    this.url = this.url;

    this.modalService.open(modal, { centered: true, })
  }


}
