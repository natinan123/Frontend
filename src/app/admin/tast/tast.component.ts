import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tast',
  templateUrl: './tast.component.html',
  styleUrls: ['./tast.component.scss']
})
export class TastComponent implements OnInit {

  user: any;
  title = 'fileUpload';
  images;
  data: any;
  avatarname: any;
  pic64: any;



  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private session: SessionService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

    this.data = this.user[0].email_id;
    this.showAvatar();

    this.service.getProfile(this.data).subscribe(
      (res) => {
        console.log(res);
      }
    );

    // this.showImage();



  }

  // todo :Button upload image sigle
  onSubmit() {
    var formData = new FormData();
    formData.append('username', this.user[0].email_id);
    formData.append('blogimage', this.images);
    console.log(formData);
    this.service.postImage(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  // todo :Button upload image multi
  onMultipleSubmit() {
    const formData = new FormData();
    formData.append('username', this.user[0].email_id);
    for (let img of this.fileList) {
      formData.append('blogimage', img);
    }

    this.service.postImageMulti(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }




  //  todo : select รูป แบบรูปเดียว ใช้อันนี้
  public imagePath;
  url: any;
  picName: any;
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
    console.log(this.imagePath);
  }

  // เคลียรูป single
  removeFilesingle() {
    // this.images = null;
    // this.url = null;
    this.imagePath = null;
    this.picName = null;
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



  // รูป avatar
  showAvatar() {
    this.service.getNameAvatar(this.data).subscribe(
      (res) => {
        // console.log(res)
        this.avatarname = res[0].filename,
          this.pic64 = res[0].picBase64
        // console.log(this.pic64);
        // console.log(this.avatarname);
      }
    );
  }


}
