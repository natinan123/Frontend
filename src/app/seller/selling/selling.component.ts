import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {

  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('draft', { static: false }) draft: ElementRef;


  public firstFormGroup = new FormGroup({
    Type_pro: new FormControl(''),
    Type_sell: new FormControl(''),
    Zone: new FormControl(''),
    Province_id: new FormControl(''),
    Location_id: new FormControl(''),
    Type_user: new FormControl(''),

  })

  public secondFormGroup = new FormGroup({
    Pro_head: new FormControl(''),
    Pro_detail: new FormControl('')
  })

  public thirdFormGroup = new FormGroup({

  })


  public fourthFormGroup = new FormGroup({
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
    Check11: new FormControl(''),
    Check12: new FormControl(''),
    Check13: new FormControl(''),
    Check14: new FormControl(''),
    Check15: new FormControl(''),
    Check16: new FormControl(''),
    Check17: new FormControl(''),
    Check18: new FormControl(''),
    Check19: new FormControl(''),
    Check20: new FormControl(''),
  })

  public MapFormGroup = new FormGroup({
    latitude: new FormControl(''),
    longitude: new FormControl('')
  })



  zones: Object;
  provins: Object;
  Province_id: any;
  Location_id: any;
  types: Object;
  lat2: number;
  lng2: number;
  Type_pro: any;
  Type_sell: any;
  Type_user: any;
  Pro_head: any;
  Pro_detail = '';
  Area: any;
  Space: any;
  Price: any;
  Badroom: any;
  Toilet: any;
  Floor: any;
  Check1: any = false;
  Check2: any = false;
  Check3: any = false;
  Check4: any = false;
  Check5: any = false;
  Check6: any = false;
  Check7: any = false;
  Check8: any = false;
  Check9: any = false;
  Check10: any = false;
  Check11: any = false;
  Check12: any = false;
  Check13: any = false;
  Check14: any = false;
  Check15: any = false;
  Check16: any = false;
  Check17: any = false;
  Check18: any = false;
  Check19: any = false;
  Check20: any = false;
  user: any;
  Location: any;
  pro_limit: any;
  count_pro: any;
  district: Object;
  location_id: any;
  log2 = '';
  test123: string;
  test12345: string;
  guide_price: Object;




  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Type_pro: ['', Validators.required],
      Type_sell: ['', Validators.required],
      Zone: ['', Validators.required],
      Province_id: ['', Validators.required],
      Location_id: ['', Validators.required],
      // Type_user: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Pro_head: ['', Validators.required],
      Pro_detail: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({

    });
    this.fourthFormGroup = this._formBuilder.group({
      Area: ['', Validators.required],
      Price: ['', Validators.required],
      Space: [''],
      Badroom: [''],
      Toilet: [''],
      Floor: [''],
      Check1: [''],
      Check2: [''],
      Check3: [''],
      Check4: [''],
      Check5: [''],
      Check6: [''],
      Check7: [''],
      Check8: [''],
      Check9: [''],
      Check10: [''],
      Check11: [''],
      Check12: [''],
      Check13: [''],
      Check14: [''],
      Check15: [''],
      Check16: [''],
      Check17: [''],
      Check18: [''],
      Check19: [''],
      Check20: [''],
    });

    this.user = this.session.getActiveUser();
    // console.log(this.user);


    this.getCountPro();
    this.getUserLocation();
    this.getZonePro();
    this.getType();
  
  }

  // ราคาแนะนำ
  getGuide_price(Area) {
    this.service.getGuide_price(Area).subscribe(
      (res) => {
        console.log(res);
        this.guide_price = res[0].guide_price;
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
  onProvince(zone_id) {
    this.service.getProvince(zone_id).subscribe(
      (res) => {
        console.log(res);
        this.provins = res;
      })
  }
  // เขต
  onLocation(province_id) {
    console.log(province_id);
    this.service.getLocOfPro(province_id).subscribe(
      (res) => {
        console.log(res);
        this.district = res;
      })
  }

  // กดตกลง ใน map
  onSubmitMap() {
    this.modalService.dismissAll();
  }
  // ปิด modal map
  closeModal() {
    this.clearLocation()
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



  //  todo : select รูป แบบหลายรูป ใช้อันนี้
  @ViewChild('attachments', { static: false }) attachment: any;

  selectedFile: File;
  fileList: File[] = [];
  listOfFiles: any[] = [];
  urls: any[] = [];

  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        console.log(event.target.result);
        this.urls.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[i]);
    }
    this.attachment.nativeElement.value = '';
  }

  removeSelectedFile(index) {
    // Delete the item from fileNames list
    this.listOfFiles.splice(index, 1);
    // delete file from FileList
    this.fileList.splice(index, 1);
    // delete file from image
    this.urls.splice(index, 1);
  }



  onTest() {
    this.log2 += `${this.Pro_detail}\n`;
    this.test123 = utf8_to_b64(this.log2);
    this.test12345 = b64_to_utf8(this.test123);
  }


  // todo : add รายการอสังหาริมทรัพย์ เผยแพร่
  onSubmit() {
    // textarea2
    this.log2 += `${this.Pro_detail}\n`;
    const Pro_detail = utf8_to_b64(this.log2);

    const data = {
      type_id: this.Type_pro,
      pro_sell: this.Type_sell,
      location_id: this.location_id,
      pro_head: this.Pro_head,
      pro_detail: Pro_detail,
      pro_area: this.Area,
      pro_space: this.Space,
      price: this.Price,
      pro_bedroom: this.Badroom,
      pro_toilet: this.Toilet,
      pro_floor: this.Floor,
      latitude: this.latitude,
      longtitude: this.longitude,
      email_id: this.user[0].email_id
    }
    console.log(data);

    this.service.postProperty(data).subscribe(
      async (res) => {
        this.onStyle();
        this.onMultipleSubmit();
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
      style11: this.Check11,
      style12: this.Check12,
      style13: this.Check13,
      style14: this.Check14,
      style15: this.Check15,
      style16: this.Check16,
      style17: this.Check17,
      style18: this.Check18,
      style19: this.Check19,
      style20: this.Check20,
    }
    console.log(data)
    this.service.postProStyle(data).subscribe(
      (res) => {

      }
    )
  }

  // todo :Button upload image multi
  // ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !! แก้ตรง pro_id  ให้ตาม id ประกาศอสังหา 
  onMultipleSubmit() {
    const formData = new FormData();
    // formData.append('pro_id', '1');
    for (let img of this.fileList) {
      formData.append('blogimage', img);
    }

    this.service.postImageProMulti(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }





  // todo : add รายการอสังหาริมทรัพย์ ร่าง
  onPostDraft() {
    // console.log(this.firstFormGroup.value)
    // console.log(this.secondFormGroup.value)
    // console.log(this.thirdFormGroup.value)

    const data = {
      type_id: this.Type_pro,
      pro_sell: this.Type_sell,
      location_id: this.location_id,
      pro_head: this.Pro_head,
      pro_detail: this.Pro_detail,
      pro_area: this.Area,
      pro_space: this.Space,
      price: this.Price,
      pro_bedroom: this.Badroom,
      pro_toilet: this.Toilet,
      pro_floor: this.Floor,
      latitude: this.latitude,
      longtitude: this.longitude,
      email_id: this.user[0].email_id
    }
    console.log(data);
    this.service.postProDraft(data).subscribe(
      async (res) => {
        this.onStyle();
        this.onMultipleSubmit()
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
      style11: this.Check11,
      style12: this.Check12,
      style13: this.Check13,
      style14: this.Check14,
      style15: this.Check15,
      style16: this.Check16,
      style17: this.Check17,
      style18: this.Check18,
      style19: this.Check19,
      style20: this.Check20,
    }
    console.log(data)
    this.service.postDraftStyle(data).subscribe(
      async (res) => {


      }
    )
  }

  // map
  latitude;
  longitude;
  zoom: number = 8;
  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    (
      this.latitude = lat,
      this.longitude = lng
    )
    console.log(this.latitude)
    console.log(this.longitude)
  }

  onYourLoction() {
    this.latitude = this.lat2;
    this.longitude = this.lng2;
  }
  // ยกเลิกตำแหน่ง
  clearLocation() {
    this.latitude = null;
    this.longitude = null;
  }


  // onClickCheck() {
  //   console.log(this.thirdFormGroup.value)


  //   const data = {
  //     style1: this.Check1,
  //     style2: this.Check2,
  //     style3: this.Check3,
  //     style4: this.Check4,
  //     style5: this.Check5,
  //     style6: this.Check6,
  //     style7: this.Check7,
  //     style8: this.Check8,
  //     style9: this.Check9,
  //     style10: this.Check10,
  //   }
  //   console.log(data)
  // }
}
