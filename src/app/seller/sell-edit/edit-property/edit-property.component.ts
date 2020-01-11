import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
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
    type_id: new FormControl(''),
    pro_sell: new FormControl(''),
    Loc_zone: new FormControl(''),
    location_id: new FormControl(''),
    Type_user: new FormControl(''),

  })

  public secondFormGroup = new FormGroup({
    pro_head: new FormControl(''),
    pro_detail: new FormControl('')
  })

  public thirdFormGroup = new FormGroup({

  })


  public fourthFormGroup = new FormGroup({
    pro_area: new FormControl(''),
    pro_space: new FormControl(''),
    price: new FormControl(''),
    pro_bedroom: new FormControl(''),
    pro_toilet: new FormControl(''),
    pro_floor: new FormControl(''),
    style1: new FormControl(''),
    style2: new FormControl(''),
    style3: new FormControl(''),
    style4: new FormControl(''),
    style5: new FormControl(''),
    style6: new FormControl(''),
    style7: new FormControl(''),
    style8: new FormControl(''),
    style9: new FormControl(''),
    style10: new FormControl(''),
  })

  // ! test


  user: any;
  lat2: number;
  lng2: number;
  pro_limit: any;
  count_pro: any;
  types: Object;
  zones: Object;
  provins: Object;
  pro_id: any;
  type_id: any;
  pro_head: any;
  type_name: any;
  pro_sell: any;
  pro_detail: any;
  pro_area: any;
  pro_space: any;
  price: any;
  pro_floor: any;
  pro_bedroom: any;
  pro_toilet: any;
  pro_status: any;
  pro_map: any;
  pro_post: any;
  pro_views: any;
  email_id: any;
  fname: any;
  lname: any;
  id_line: any;
  facebook: any;
  profile_pic: any;
  cus_detail: any;
  cus_status: any;
  phone: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  image6: any;
  image7: any;
  image8: any;
  image9: any;
  image10: any;
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
  location_id: any;
  loc_name: any;
  loc_zone: any;
  zone_name: any;
  Loc_zone: any;



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

    this.firstFormGroup = this._formBuilder.group({
      type_id: ['', Validators.required],
      pro_sell: ['', Validators.required],
      Loc_zone: ['', Validators.required],
      location_id: ['', Validators.required],
      // Type_user: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      pro_head: ['', Validators.required],
      pro_detail: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({

    });
    this.thirdFormGroup = this._formBuilder.group({
      pro_area: ['', Validators.required],
      price: ['', Validators.required],
      pro_space: [''],
      pro_bedroom: [''],
      pro_toilet: [''],
      pro_floor: [''],
      style1: [''],
      style2: [''],
      style3: [''],
      style4: [''],
      style5: [''],
      style6: [''],
      style7: [''],
      style8: [''],
      style9: [''],
      style10: [''],

    });

    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.getUserLocation();

    this.getCountPro();
    this.getDetail();
    this.getProfile();
    this.getZonePro();
    this.getType();
    this.onLocation();
  }


  // profile
  getProfile() {
    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.pro_limit = res[0].pro_limit;
      }
    )
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
    const zone = this.Loc_zone
    console.log(zone)
    this.service.getProvince(zone).subscribe(
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
    this.lat2 = this.lat2;
    this.lng2 = this.lng2;
    this.latitude = this.latitude;
    this.longtitude = this.longtitude;
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
          this.type_id = res[0].type_id,
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
          this.location_id = res[0].location_id,
          this.loc_name = res[0].loc_name,
          this.loc_zone = res[0].loc_zone,
          this.zone_name = res[0].zone_name,
          this.latitude = res[0].latitude,
          this.longtitude = res[0].longtitude

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
