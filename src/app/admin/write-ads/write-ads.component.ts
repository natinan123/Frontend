import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write-ads',
  templateUrl: './write-ads.component.html',
  styleUrls: ['./write-ads.component.scss']
})


export class WriteAdsComponent implements OnInit {

  public AdsFormGroup = new FormGroup({
    art_type: new FormControl(''),
    articl_head: new FormControl(''),
    Art_detail1: new FormControl(''),
    Art_detail2: new FormControl('')

  })
  art_type: any;
  articl_head: any;
  art_detail1: any;
  art_detail2: any;
  log1: string;
  log2: string;





  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {

  }


  log = '';

  logText(value: string): void {
    this.log += `${value}\n`;
    var str = this.log;
    const enc = window.btoa(unescape(encodeURIComponent(str)));
    console.log(enc);
  
  
  }



  //  todo : select รูป แบบหลายรูป ใช้อันนี้
  @ViewChild('attachments', { static: false }) attachment: any;

  selectedFile: File;
  fileList: File[] = [];
  listOfFiles: any[] = [];
  urls: any[1] = [];

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



  detail1;
  detail2;
  // post Art
  onPostArt() {
    this.log1 += `${this.art_detail1}\n`;
    var str = this.log1;
    this.detail1 = window.btoa(unescape(encodeURIComponent(str)));
    this.log2 += `${this.art_detail2}\n`;
    var str2 = this.log2;
    this.detail2 = window.btoa(unescape(encodeURIComponent(str2)));
    console.log(this.log1);
    console.log(this.log1);

    // textValue = '';
    // log = '';
    // log2 = '';
  
    // logText(value: string): void {
    //   this.log += `${value}\n`;
  
    //   var str = this.log;
    //   const enc = window.btoa(unescape(encodeURIComponent(str)));
    //   console.log(enc);
    //   const detail2 = window.btoa(unescape(encodeURIComponent(str)));
    //   this.log2 = detail2
  
    // }

    
    // const formData = new FormData();
    // formData.append('art_type', this.art_type);
    // formData.append('articl_head', this.articl_head);
    // formData.append('art_detail1', this.detail1);
    // formData.append('art_detail2', this.detail2);
    // for (let img of this.fileList) {
    //   formData.append('blogimage', img);
    // }

    // this.service.postArticle(formData).subscribe(
    //   async (res) => {
    //     console.log(res);
    //   }
    // )



  }


 

}
