import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl, FormControlName, FormBuilder } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

  data: string[];

  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('draft', { static: false }) draft: ElementRef;


  public firstFormGroup = new FormGroup({
    Type_pro: new FormControl(''),
    Type_sell: new FormControl(''),
    Zone: new FormControl(''),
    Location_id: new FormControl(''),
    Type_user: new FormControl(''),

  })

  public secondFormGroup = new FormGroup({
    Pro_head: new FormControl(''),
    Pro_detail: new FormControl(''),
  })

  public thirdFormGroup = new FormGroup({
    Area: new FormControl(''),
    Space: new FormControl(''),
    Price: new FormControl(''),
    Badroom: new FormControl(''),
    Toilet: new FormControl(''),
    Floor: new FormControl(''),
    Check1: new FormControl(''),
    Check2: new FormControl(''),
    Check3: new FormControl(''),
    Check4: new FormControl(''),
    Check5: new FormControl(''),
    Check6: new FormControl(''),
    Check7: new FormControl(''),
    Check8: new FormControl(''),
    Check9: new FormControl(''),
    Check10: new FormControl(''),
  })

  // ! test
  price: FormControlName;

  user: any;
  zones: Object;
  provins: Object;

  Location_id: any;
  selectedValue: any;
  loc_zone: any;
  types: Object;
  lat2: number;
  lng2: number;
  Type_pro: any;
  Type_sell: any;
  Type_user: any;
  Pro_head: any;
  Pro_detail: any;
  Area: any;
  Space: any;
  Price: any;
  Badroom: any;
  Toilet: any;
  Floor: any;
  Check1: any;
  Check2: any;
  Check3: any;
  Check4: any;
  Check5: any;
  Check6: any;
  Check7: any;
  Check8: any;
  Check9: any;
  Check10: any;

  Location: any;
  pro_limit: any;
  count_pro: any;

  pro_id: any;
  pro_head: any;
  type_name;
  pro_sell;
  pro_detail;
  pro_area;
  pro_space;
  // price;
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

  loc_name: any;
  zone_name: any;

  // latitude;
  // longitude;
  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.getAll('pro_id');
    console.log(this.data)



    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.getUserLocation();
    this.pro_limit = this.user[0].pro_limit;
    this.getCountPro();
    this.getDetail()

    this.getZonePro();
    this.getType();
    this.onLocation();
  }

  // จำนวนอสังหา
  getCountPro() {
    this.service.getCountPro(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res)
        this.count_pro = res[0].count_pro

      }
    )
  }

  // ประเภทอสังหา
  getType() {
    this.service.getType().subscribe(
      (res) => {
        console.log(res);
        this.types = res;
      }
    )
  }
  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onLocation() {
    this.loc_zone = this.selectedValue
    console.log(this.loc_zone)
    this.service.getProvince(this.loc_zone).subscribe(
      (res) => {
        console.log(res);

        this.provins = res;

      })

  }

  closeModal() {
    this.modalService.dismissAll();
  }
  // Modal recom
  openModalLocation(modal, user) {

    this.modalService.open(modal, { centered: true, size: "lg" })
  }

  // ที่อยู่ผู้ใช้ Map
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat2 = position.coords.latitude;
        this.lng2 = position.coords.longitude;

      });
    }
  }

  getDetail() {
    this.service.getProDetail(this.data).subscribe(
      (res) => {
        console.log(res)
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
          this.style1 = res[0].style1.data,
          this.style2 = res[0].style2.data,
          this.style3 = res[0].style3.data,
          this.style4 = res[0].style4.data,
          this.style5 = res[0].style5.data,
          this.style6 = res[0].style6.data,
          this.style7 = res[0].style7.data,
          this.style8 = res[0].style8.data,
          this.style9 = res[0].style9.data,
          this.style10 = res[0].style10.data,
          this.loc_name = res[0].loc_name,
          this.zone_name = res[0].zone_name,
          this.latitude = res[0].latitude,
          this.longtitude = res[0].longtitude

      }
    )
  }


  // todo : add รายการอสังหาริมทรัพย์ เผยแพร่
  onSubmit() {
    // console.log(this.firstFormGroup.value)
    // console.log(this.secondFormGroup.value)
    // console.log(this.thirdFormGroup.value)

    const data = {
      type_id: this.Type_pro,
      pro_sell: this.Type_sell,
      location_id: this.Location_id,
      // d: this.Type_user,
      pro_head: this.Pro_head,
      pro_detail: this.Pro_detail,
      pro_area: this.Area,
      pro_space: this.Space,
      price: this.Price,
      pro_bedroom: this.Badroom,
      pro_toilet: this.Toilet,
      pro_floor: this.Floor,
      latitude: this.latitude,
      longtitude: this.longtitude,
      email_id: this.user[0].email_id
    }
    console.log(data);

    this.service.postProperty(data).subscribe(
      async (res) => {
        this.onStyle();
        this.modalService.open(this.success);
        await delay(2000);
        this.closeModal();
        this.router.navigate(['seller/seller/selle-property']);


      }
    )
  }
  onStyle() {
    const data = {
      style1: this.Check1,
      style2: this.Check2,
      style3: this.Check3,
      style4: this.Check4,
      style5: this.Check5,
      style6: this.Check6,
      style7: this.Check7,
      style8: this.Check8,
      style9: this.Check9,
      style10: this.Check10,
    }
    console.log(data)
    this.service.postProStyle(data).subscribe(
      (res) => {

      }
    )
  }

  // todo : add รายการอสังหาริมทรัพย์ เผยแพร่
  onPostDraft() {
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)
    console.log(this.thirdFormGroup.value)

    const data = {
      type_id: this.Type_pro,
      pro_sell: this.Type_sell,
      location_id: this.Location_id,
      // d: this.Type_user,
      pro_head: this.Pro_head,
      pro_detail: this.Pro_detail,
      pro_area: this.Area,
      pro_space: this.Space,
      price: this.Price,
      pro_bedroom: this.Badroom,
      pro_toilet: this.Toilet,
      pro_floor: this.Floor,
      latitude: this.latitude,
      longtitude: this.longtitude,
      email_id: this.user[0].email_id
    }
    console.log(data);
    this.service.postProDraft(data).subscribe(
      async (res) => {
        this.onStyle();
        this.modalService.open(this.draft);
        await delay(2000);
        this.closeModal();
        this.router.navigate(['seller/seller/selle-property']);

      }
    )
  }
  onDraftStyle() {
    const data = {
      style1: this.Check1,
      style2: this.Check2,
      style3: this.Check3,
      style4: this.Check4,
      style5: this.Check5,
      style6: this.Check6,
      style7: this.Check7,
      style8: this.Check8,
      style9: this.Check9,
      style10: this.Check10,
    }
    console.log(data)
    this.service.postDraftStyle(data).subscribe(
      async (res) => {


      }
    )
  }

  // map
  latitude;
  longtitude;
  zoom: number = 8;
  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    (
      this.latitude = lat,
      this.longtitude = lng
    )
    console.log(this.latitude)
    console.log(this.longtitude)
  }



}
