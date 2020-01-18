import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss']
})
export class EditAdsComponent implements OnInit {


  data;
  article_id: any;
  articl_head: any;
  art_pic1: any;
  art_pic2: any;
  art_pic3: any;
  art_type: any;
  art_date: any;
  art_view: any;

  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.getAll('article_id');
    console.log(this.data)

    this.getDetail();
    // updatep ยอดวิว
    this.service.putArtview(this.data).subscribe(
      async (res) => {
      }
    )


  }

  getDetail() {
    this.service.getArtDetail(this.data).subscribe(
      (res) => {
        console.log(res);
        this.article_id = res[0].article_id,
          this.articl_head = res[0].articl_head,
          this.art_detail1 = b64_to_utf8(res[0].art_detail1),
          this.art_detail2 = b64_to_utf8(res[0].art_detail2),
          this.art_pic1 = res[0].art_pic1,
          this.art_pic2 = res[0].art_pic2,
          this.art_pic3 = res[0].art_pic3,
          this.art_type = res[0].art_type,
          this.art_date = res[0].art_date,
          this.art_view = res[0].art_view

      }
    )
  }

  // Modal edit
  openModalEdit(modal, data) {

    this.modalService.open(modal, { centered: true, })
  }


  public AdsFormGroup = new FormGroup({
    art_type: new FormControl(''),
    articl_head: new FormControl(''),
    Art_detail1: new FormControl(''),
    Art_detail2: new FormControl('')

  })


  


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
  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.fileList) {
      formData.append('blogimage', img);
    }

    this.service.postImageProMulti(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  art_detail1 = '';
  art_detail2 = '';

  log = '';
  log2 = '';


  // // post Art
  // onPostArt(): void {
  //   // textarea1
  //   this.log += `${this.art_detail1}\n`;
  //   var str = this.log;
  //   const detail1 = utf8_to_b64(this.log);
  //   // this.a = utf8_to_b64(this.log);
  //   // this.b = b64_to_utf8(this.a)

  //   // textarea2
  //   this.log2 += `${this.art_detail2}\n`;
  //   var str2 = this.log2;
  //   const detail2 = utf8_to_b64(this.log);


  //   const formData = new FormData();
  //   formData.append('art_type', this.art_type);
  //   formData.append('articl_head', this.articl_head);
  //   formData.append('art_detail1', detail1);
  //   formData.append('art_detail2', detail2);
  //   for (let img of this.fileList) {
  //     formData.append('blogimage', img);
  //   }

  //   this.service.postArticle(formData).subscribe(
  //     async (res) => {
  //       console.log(res);
  //     }
  //   )


  // }




}
