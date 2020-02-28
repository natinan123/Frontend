import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';


// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

@Component({
  selector: 'app-detail-suggest',
  templateUrl: './detail-suggest.component.html',
  styleUrls: ['./detail-suggest.component.scss']
})
export class DetailSuggestComponent implements OnInit {
  id_data: string;
  images: any;
  pro_id: any;
  pro_head: any;



  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id_data = this.route.snapshot.paramMap.get('pro_id');
    console.log(this.id_data);
    this.getDetail();
  }


  getDetail() {
    this.service.getProDetail(this.id_data).subscribe(
      (res) => {
        console.table(res)
        this.pro_id = res[0].pro_id,
          this.pro_head = res[0].pro_head
        //   this.type_name = res[0].type_name,
        //   this.pro_sell = res[0].pro_sell,
        //   this.pro_detail = b64_to_utf8(res[0].pro_detail),
        //   this.pro_area = res[0].pro_area,
        //   this.pro_space = res[0].pro_space,
        //   this.price = res[0].price,
        //   this.pro_floor = res[0].pro_floor,
        //   this.pro_bedroom = res[0].pro_bedroom,
        //   this.pro_toilet = res[0].pro_toilet,
        //   this.pro_status = res[0].pro_status,
        //   this.pro_map = res[0].pro_map,
        //   this.pro_post = res[0].pro_post,
        //   this.pro_views = res[0].pro_views,
        //   this.location_id = res[0].location_id,
        //   this.email_id = res[0].email_id,
        //   this.fname = res[0].fname,
        //   this.lname = res[0].lname,
        //   this.id_line = res[0].id_line,
        //   this.facebook = res[0].facebook,
        //   this.profile_pic = res[0].profile_pic,
        //   this.cus_detail = res[0].cus_detail,
        //   this.cus_status = res[0].cus_status,
        //   this.phone = res[0].phone,
        //   // this.image1 = res[0].image1,
        //   // this.image2 = res[0].image2,
        //   // this.image3 = res[0].image3,
        //   // this.image4 = res[0].image4,
        //   // this.image5 = res[0].image5,
        //   // this.image6 = res[0].image6,
        //   // this.image7 = res[0].image7,
        //   // this.image8 = res[0].image8,
        //   // this.image9 = res[0].image9,
        //   // this.image10 = res[0].image10,
        //   // this.image11 = res[0].image11,
        //   // this.image12 = res[0].image12,
        //   // this.image13 = res[0].image13,
        //   // this.image14 = res[0].image14,
        //   // this.image15 = res[0].image15,
        //   // this.image16 = res[0].image16,
        //   // this.image17 = res[0].image17,
        //   // this.image18 = res[0].image18,
        //   // this.image19 = res[0].image19,
        //   // this.image20 = res[0].image20,
        //   // this.style1 = res[0].style1,
        //   // this.style2 = res[0].style2,
        //   // this.style3 = res[0].style3,
        //   // this.style4 = res[0].style4,
        //   // this.style5 = res[0].style5,
        //   // this.style6 = res[0].style6,
        //   // this.style7 = res[0].style7,
        //   // this.style8 = res[0].style8,
        //   // this.style9 = res[0].style9,
        //   // this.style10 = res[0].style10,
        //   // this.style11 = res[0].style11,
        //   // this.style12 = res[0].style12,
        //   // this.style13 = res[0].style13,
        //   // this.style14 = res[0].style14,
        //   // this.style15 = res[0].style15,
        //   // this.style16 = res[0].style16,
        //   // this.style17 = res[0].style17,
        //   // this.style18 = res[0].style18,
        //   // this.style19 = res[0].style19,
        //   // this.style20 = res[0].style20,
        //   this.loc_name = res[0].loc_name,
        //   this.zone_name = res[0].zone_name,
        // this.province_id = res[0].province_id,
        // this.provin_name = res[0].provin_name,
        //   // this.latitude = res[0].latitude,
        //   // this.longtitude = res[0].longtitude,
        //   this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +
        //     this.image1)

      }
    )
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
    formData.append('pro_id', this.id_data);
    formData.append('blogimage', this.images);
    console.log(formData);

    this.service.postPacket(formData).subscribe(
      (res) => {
        // this.route.navigate(['/seller/seller/suggest_list'])
        this.router.navigate(['/seller/seller/suggest_list']);

      },
      (err) => console.log(err)
    );
  }



}
