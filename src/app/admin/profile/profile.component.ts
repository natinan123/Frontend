import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  images: any;


  fname;
  lname;
  id_line;
  facebook;
  avatar;
  cus_detail;
  cus_status;
  phone;
  pro_limit: any;
  limit_id: any;
  limit: Object;
  data: any;
  email: any;
  pic64: any;
  avatarname: any;
  pic_avatar: any;




  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private session: SessionService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.data = this.user[0].email_id;
    this.showAvatar();

    this.service.getProfile(this.data).subscribe(
      (res) => {
        this.email = res[0].email_id,
          this.fname = res[0].fname,
          this.lname = res[0].lname,
          this.id_line = res[0].id_line,
          this.facebook = res[0].facebook,
          this.avatar = res[0].profile_pic,
          this.cus_detail = res[0].cus_detail,
          this.cus_status = res[0].cus_status,
          this.phone = res[0].phone,
          this.pro_limit = res[0].pro_limit,
          this.limit_id = res[0].limit_id
        console.log(res);
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
  // เคลียรูป single
  removeFilesingle() {
    this.imagePath = null;
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




}
