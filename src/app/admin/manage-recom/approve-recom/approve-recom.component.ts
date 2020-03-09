import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

@Component({
  selector: 'app-approve-recom',
  templateUrl: './approve-recom.component.html',
  styleUrls: ['./approve-recom.component.scss']
})
export class ApproveRecomComponent implements OnInit {
  @ViewChild('success', { static: false }) success: ElementRef;

  data_id: string;
  packet_id: any;
  packet_image: any;
  pro_id: any;
  packet_date: any;
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
  profile_pic: any;
  cus_detail: any;
  phone: any;
  loc_name: any;
  type_name: any;
  province_id: any;
  provin_name: any;
  zone_id: any;
  zone_name: any;
  imagePath: Object;
  firstImage: any;
  SelectImage: any;
  lat2: number;
  lng2: number;


  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data_id = this.route.snapshot.paramMap.get('pro_id');

    this.getPacket_detail();
    this.getImagePro();
    this.getUserLocation();

  }

  // รายการส่งมาร้องขอแนะนำ
  getPacket_detail() {
    const pro_id = this.data_id
    this.service.getPack_detail(pro_id).subscribe(
      (res) => {
        console.log(res);
        this.packet_id = res[0].packet_id;
        this.packet_image = res[0].packet_image;
        this.pro_id = res[0].pro_id;
        this.packet_date = res[0].packet_date;
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
        this.profile_pic = res[0].profile_pic;
        this.cus_detail = res[0].cus_detail;
        this.phone = res[0].phone;
        this.loc_name = res[0].loc_name;
        this.type_name = res[0].type_name;
        this.province_id = res[0].province_id;
        this.provin_name = res[0].provin_name;
        this.zone_id = res[0].zone_id;
        this.zone_name = res[0].zone_name;
      }
    )
  }
  getImagePro() {
    const pro_id = this.data_id
    this.service.getNamePro(pro_id).subscribe(
      (res) => {
        console.log(res)
        this.imagePath = res;
        this.firstImage = res[0].image;
      }
    )
  }
  // เลือกรูปหลัก
  onSelectImage(image) {
    // console.log(image);
    this.SelectImage = image;
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
  // todo : Modal //
  // Modal recom
  openModalLocation(modal, user) {
    this.lat2 = this.lat2;
    this.lng2 = this.lng2;
    this.latitude = this.latitude;
    this.longtitude = this.longtitude;
    this.modalService.open(modal, { centered: true, size: "lg" })
  }

  onRecom() {
    const data = {
      pro_id: this.pro_id
    }
    console.log(data);
    this.service.post_recom(data).subscribe(
      async (res) => {
        this.modalService.open(this.success);

        this.router.navigate(['admin/admin/ManageRecom']);

        await delay(2000);
        this.modalService.dismissAll();
        this.delete_packet();
      }
    )
  }

  delete_packet() {
    const packet_id = this.packet_id
    this.service.delete_packet(packet_id).subscribe(
      async (res) => {
      }
    )
  }



}
