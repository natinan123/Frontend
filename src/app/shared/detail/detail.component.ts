import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { delay } from 'q';
import { DomSanitizer } from '@angular/platform-browser';


// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {



  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('unfollow', { static: false }) unfollow: ElementRef;
  user: any;
  data;
  pro_id: any;


  // views: string[];
  // count: any;

  imagePath: any;
  lat2: number;
  lng2: number;
  follow: any;
  pro_head: any;
  pro_sell: any;
  pro_detail: any;
  pro_area: any;
  pro_space: any;
  price: any;
  pro_floor: any;
  pro_bedroom: any;
  pro_toilet: any;
  pro_status: any;
  pro_views: any;
  latitude: any;
  longtitude: any;
  pro_post: any;
  end_date: any;
  location_id: any;
  type_id: any;
  style_id: any;
  style1: any;
  style2: any;
  style3: any;
  style4: any;
  style5: any;
  style6: any;
  style7: any;
  style8: any;
  style9: any;
  style10: any;
  style11: any;
  style12: any;
  style13: any;
  style14: any;
  style15: any;
  style16: any;
  style17: any;
  style18: any;
  style19: any;
  style20: any;
  email_id: any;
  fname: any;
  lname: any;
  id_line: any;
  facebook: any;
  cus_detail: any;
  phone: any;
  loc_name: any;
  type_name: any;
  province_id: any;
  provin_name: any;
  zone_id: any;
  zone_name: any;
  profile_pic: any;
  SelectImage: any;
  firstImage: any;
  view_list: any;
  FromProvin: any;
  count_FromProvin: any;
  status: any;
  link: string;
  count_view: any;


  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private sanitizer: DomSanitizer,

   

  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.getAll('pro_id');
    console.log(this.data)
    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    if (this.user == null) {
      this.link = '/mainpage/mainpage/detail';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/detail';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/detail';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/detail';
    }

    this.getDetail();

    // updatep ยอดวิว
    this.service.putProview(this.data).subscribe(
      async (res) => {
      }
    )
    this.getUserLocation();
    this.getfollow();
    this.getImagePro();
    
  }

  getDetail() {
    this.service.getProDetail(this.data).subscribe(
      (res) => {
        console.log(res)
        this.pro_id = res[0].pro_id;
        this.pro_head = res[0].pro_head;
        this.pro_sell = res[0].pro_sell;
        this.pro_detail = b64_to_utf8(res[0].pro_detail);
        this.pro_area = res[0].pro_area;
        this.pro_space = res[0].pro_space;
        this.price = res[0].price;
        this.pro_floor = res[0].pro_floor;
        this.pro_bedroom = res[0].pro_bedroom;
        this.pro_toilet = res[0].pro_toilet;
        this.pro_status = res[0].pro_status;
        this.pro_views = res[0].pro_views;
        this.latitude = res[0].latitude;
        this.longtitude = res[0].longtitude;
        this.pro_post = res[0].pro_post;
        this.end_date = res[0].end_date;
        this.location_id = res[0].location_id;
        this.type_id = res[0].type_id;
        this.style_id = res[0].style_id;
        this.style1 = res[0].style1;
        this.style2 = res[0].style2;
        this.style3 = res[0].style3;
        this.style4 = res[0].style4;
        this.style5 = res[0].style5;
        this.style6 = res[0].style6;
        this.style7 = res[0].style7;
        this.style8 = res[0].style8;
        this.style9 = res[0].style9;
        this.style10 = res[0].style10;
        this.style11 = res[0].style11;
        this.style12 = res[0].style12;
        this.style13 = res[0].style13;
        this.style14 = res[0].style14;
        this.style15 = res[0].style15;
        this.style16 = res[0].style16;
        this.style17 = res[0].style17;
        this.style18 = res[0].style18;
        this.style19 = res[0].style19;
        this.style20 = res[0].style20;
        this.email_id = res[0].email_id;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.id_line = res[0].id_line;
        this.facebook = res[0].facebook;
        this.cus_detail = res[0].cus_detail;
        this.phone = res[0].phone;
        this.loc_name = res[0].loc_name;
        this.type_name = res[0].type_name;
        this.province_id = res[0].province_id;
        this.provin_name = res[0].provin_name;
        this.zone_id = res[0].zone_id;
        this.zone_name = res[0].zone_name;
        this.profile_pic = res[0].profile_pic;

        this.Near_pro();

      }
    )
  }

  getImagePro() {
    this.service.getNamePro(this.data).subscribe(
      (res) => {
        console.log(res)
        this.imagePath = res;
        this.firstImage = res[0].image;
      }
    )
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  // ที่อยู่ผู้ใช้
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat2 = position.coords.latitude;
        this.lng2 = position.coords.longitude;

      });
    }
  }


  // Modal recom
  openModalLocation(modal, user) {
    this.lat2 = this.lat2;
    this.lng2 = this.lng2;
    this.latitude = this.latitude;
    this.longtitude = this.longtitude;
    this.modalService.open(modal, { centered: true, size: "lg" })
  }

  getfollow() {
    const data = {
      email_id: this.user[0].email_id,
      pro_id: this.route.snapshot.paramMap.get('pro_id')
    }
    this.service.getfollow(data).subscribe(
      (res) => {
        console.log(res)
        this.follow = res[0].follow

      }
    )
  }

  // follow
  onClickFollow() {
    const data = {
      email_id: this.user[0].email_id,
      pro_id: this.route.snapshot.paramMap.get('pro_id')
    }
    console.log(data);

    this.service.postFavorate(data).subscribe(
      async (res) => {
        console.log(res);
        this.getfollow()
        this.modalService.open(this.success);
        await delay(2000);
        this.modalService.dismissAll();
      }
    )
  }

  // Unfollow
  onUnFollow() {
    const data = {
      email_id: this.user[0].email_id,
      pro_id: this.route.snapshot.paramMap.get('pro_id')
    }
    console.log(data);

    this.service.deleteUnfollow(data).subscribe(
      async (res) => {
        console.log(res);
        this.getfollow()
        this.modalService.open(this.unfollow);
        await delay(2000);
        this.modalService.dismissAll();
      }
    )

  }

  // เลือกรูปหลัก
  onSelectImage(image) {
    // console.log(image);
    this.SelectImage = image;
  }

  // ใกล้เคียง
  Near_pro() {
    const data2 = {
      province_id: this.province_id,
      location_id: this.location_id
    }
    console.log(data2);
    this.service.getProFromProvin(data2).subscribe(
      (res) => {
        console.log(res);
        this.FromProvin = res;
        this.count_FromProvin = this.FromProvin.length;

      })
  }


  onClick(r) {
    console.log(r);
    this.router.navigate([this.link, r.pro_id]);
    this.data = r.pro_id
    this.getDetail();
    // updatep ยอดวิว
    this.service.putProview(this.data).subscribe(
      async (res) => {
      }
    )
    this.getUserLocation();
    this.getfollow();
    this.getImagePro();
    window.scroll(0, 0);
  }

}
