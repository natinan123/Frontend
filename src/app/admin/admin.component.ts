import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: any;
  data: any;
  email: any;
  fname: any;
  lname: any;
  id_line: any;
  facebook: any;
  profile_pic: any;
  cus_detail: any;
  cus_status: any;
  phone: any;
  pro_limit: any;
  limit_id: any;
  avatarname: any;
  pic64: any;
  count_wait: any;
  count_ListProWait: any;
  packet_list_count: any;
  packet_list: any;




  constructor(
    private session: SessionService,
    private route: Router,
    private service: ServerService,

  ) { }

  ngOnInit() {

    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.data = this.user[0].email_id;
    this.service.getProfile(this.data).subscribe(
      (res) => {
        this.email = res[0].email_id,
          this.fname = res[0].fname,
          this.lname = res[0].lname,
          this.id_line = res[0].id_line,
          this.facebook = res[0].facebook,
          this.profile_pic = res[0].profile_pic,
          this.cus_detail = res[0].cus_detail,
          this.cus_status = res[0].cus_status,
          this.phone = res[0].phone,
          this.pro_limit = res[0].pro_limit,
          this.limit_id = res[0].limit_id
        // console.log(res);
      }
    );

    this.showAvatar();
    this.getCountProWait();
    this.putExpire();
    this.delete_recom();
  }




  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage'])
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

  // นับอสังหารอตรวจสอบ
  getCountProWait() {
    this.service.getCountProWait().subscribe(
      (res) => {
        // console.log(res);
        this.count_wait = res[0].count_wait
      }
    );
  }

  // รายการส่งมาร้องขอแนะนำ
  getPacket() {
    this.service.getPacket().subscribe(
      (res) => {
        console.log(res);
        this.packet_list = res;
        this.packet_list_count = this.packet_list.length;
        console.log("นับ", this.packet_list_count);
      }
    )
  }


  // put อสังหาที่หมดอายุ
  putExpire() {
    this.service.putExpire().subscribe(
      (res) => {
      })
  }
  //  ลบ recom ที่หมดอายุ
  delete_recom() {
    this.service.delete_recom().subscribe(
      (res) => {
      })
  }
}
