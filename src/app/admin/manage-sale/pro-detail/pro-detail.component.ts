import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.scss']
})
export class ProDetailComponent implements OnInit {
  data: string[];
  pro_id: any;
  pro_head: any;
  pro_sell: any;
  pro_detail: string;
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
  imagePath: Object;
  firstImage: any;
  lat2: number;
  lng2: number;
  SelectImage: any;

  // displayedColumns: string[] = ['a'];
  // dataSource: MatTableDataSource<[any]>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;



  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {

    this.data = this.route.snapshot.paramMap.getAll('pro_id');

    console.log(this.data)

    this.getDetail();
    this.getImagePro();
    this.getUserLocation();


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
  // เลือกรูปหลัก
  onSelectImage(image) {
    // console.log(image);
    this.SelectImage = image;
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
  // todo : Modal //
  // Modal recom
  openModalLocation(modal, user) {
    this.lat2 = this.lat2;
    this.lng2 = this.lng2;
    this.latitude = this.latitude;
    this.longtitude = this.longtitude;
    this.modalService.open(modal, { centered: true, size: "lg" })
  }
  // Modal 
  openModalModifly(modal, data) {


    this.modalService.open(modal, { centered: true })
  }

  openModalClose(modal, data) {
    this.modalService.open(modal, { centered: true })
  }

  // ปรับปรุง
  onProdraft() {
    const data = {
      pro_id: this.pro_id
    }
    // console.log(data)
    this.service.putPromodify(data).subscribe(
      async (res) => {
        // await delay(1000);
        this.closeModal();
        this.router.navigate(['admin/admin/managesale']);
      }
    )
  }
  // ปิดการขาย
  onProClose() {
    const data = {
      pro_id: this.pro_id
    }
    // console.log(data)
    this.service.putProclose(data).subscribe(
      async (res) => {
        // await delay(500);
        this.closeModal();
        this.router.navigate(['admin/admin/managesale']);
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
