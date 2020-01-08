import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-post-pro',
  templateUrl: './test-post-pro.component.html',
  styleUrls: ['./test-post-pro.component.scss']
})
export class TestPostProComponent implements OnInit {
  user: any;
  types: Object;
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
  Pro_head: any;

  public firstFormGroup = new FormGroup({
    Type_pro: new FormControl(''),
    Type_sell: new FormControl(''),
    Zone: new FormControl(''),
    Location_id: new FormControl(''),
    Pro_head: new FormControl(''),
    Pro_detail: new FormControl(''),
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
  zones: Object;
  loc_zone: any;
  provins: Object;
  selectedValue: any;
  Type_pro: any;
  Type_sell: any;
  Zone: any;
  Location_id: any;
  Pro_detail: any;

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);

    this.getZonePro();
    this.getType();
    this.onLocation();




    // console.log(this.firstFormGroup.value);

  }

  // ประเภทอสังหา
  getType() {
    this.service.getType().subscribe(
      (res) => {
        // console.log(res);
        this.types = res;
      }
    )
  }
  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        // console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onLocation() {
    this.loc_zone = this.selectedValue
    // console.log(this.loc_zone)
    this.service.getProvince(this.loc_zone).subscribe(
      (res) => {
        // console.log(res);

        this.provins = res;

      })

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


  //  ! onSubmit
  onClick() {

    // console.log(this.firstFormGroup);

    const data = {
      type_id: this.Type_pro,
      pro_sell: this.Type_sell,
      location_id: this.Location_id,
      // d: this.Type_user,
      pro_head: this.Pro_head,
      pro_detail: this.Pro_detail,
      email_id: this.user[0].email_id
    }
    console.log(data);

    this.service.postProperty(data).subscribe(
      async (res) => {
        this.onMultipleSubmit();
        this.onStyle();

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


 



}
