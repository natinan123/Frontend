import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  data;
  pro_id: any;
  pro_head: any;
  type_name;
  pro_sell;
  pro_detail;
  pro_area;
  pro_space;
  price;
  pro_floor;
  pro_bedroom;
  pro_toilet;
  pro_status;
  pro_map;
  pro_post;
  pro_views: string;
  location_id;
  email_id;
  fname;
  lname;
  id_line;
  facebook;
  profile_pic;
  cus_detail;
  cus_status;
  phone;

  image1;
  image2;
  image3;
  image4;
  image5;
  image6;
  image7;
  image8;
  image9;
  image10;

  style1;
  style2;
  style3;
  style4;
  style5;
  style6;
  style7;
  style8;
  style9;
  style10;
  // views: string[];
  // count: any;
  loc_name: any;
  zone_name: any;
  lat2: number;
  lng2: number;
  latitude: any;
  longtitude: any;

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
    // this.views = this.route.snapshot.paramMap.getAll('pro_views');

    console.log(this.data)
    // console.log(this.views)

    this.getDetail();

    // updatep ยอดวิว
    this.service.putProview(this.data).subscribe(
      async (res) => {
      }
    )

    this.getUserLocation();
  }





  getDetail() {
    this.service.getProDetail(this.data).subscribe(
      (res) => {
        this.pro_id = res[0].pro_id,
          this.pro_head = res[0].pro_head,
          this.type_name = res[0].type_name,
          this.pro_sell = res[0].pro_sell,
          this.pro_detail = res[0].pro_detail,
          this.pro_area = res[0].pro_area,
          this.pro_space = res[0].pro_space,
          this.price = res[0].price,
          this.pro_floor = res[0].pro_floor,
          this.pro_bedroom = res[0].pro_bedroom,
          this.pro_toilet = res[0].pro_toilet,
          this.pro_status = res[0].pro_status,
          this.pro_map = res[0].pro_map,
          this.pro_post = res[0].pro_post,
          this.pro_views = res[0].pro_views,
          this.location_id = res[0].location_id,
          this.email_id = res[0].email_id,
          this.fname = res[0].fname,
          this.lname = res[0].lname,
          this.id_line = res[0].id_line,
          this.facebook = res[0].facebook,
          this.profile_pic = res[0].profile_pic,
          this.cus_detail = res[0].cus_detail,
          this.cus_status = res[0].cus_status,
          this.phone = res[0].phone,
          this.image1 = res[0].image1,
          this.image2 = res[0].image2,
          this.image3 = res[0].image3,
          this.image4 = res[0].image4,
          this.image5 = res[0].image5,
          this.image6 = res[0].image6,
          this.image7 = res[0].image7,
          this.image8 = res[0].image8,
          this.image9 = res[0].image9,
          this.image10 = res[0].image10,
          this.style1 = res[0].style1,
          this.style2 = res[0].style2,
          this.style3 = res[0].style3,
          this.style4 = res[0].style4,
          this.style5 = res[0].style5,
          this.style6 = res[0].style6,
          this.style7 = res[0].style7,
          this.style8 = res[0].style8,
          this.style9 = res[0].style9,
          this.style10 = res[0].style10,
          this.loc_name = res[0].loc_name,
          this.zone_name = res[0].zone_name
        this.latitude = res[0].latitude
        this.longtitude = res[0].longtitude

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

}