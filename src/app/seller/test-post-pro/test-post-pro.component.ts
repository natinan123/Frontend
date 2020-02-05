import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryItem, Gallery, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-test-post-pro',
  templateUrl: './test-post-pro.component.html',
  styleUrls: ['./test-post-pro.component.scss']
})
export class TestPostProComponent implements OnInit {

 



  user: any;
  data: any;
  avatarname: any;
  pic64: any;

  items: GalleryItem[];

  imageData = [
    {
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
    }
  ];


  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public gallery: Gallery,
    public lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.data = this.user[0].email_id;

    this.showAvatar();


    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    // This is for Lightbox example
    this.gallery.ref('lightbox').load(this.items);




  }


  // รูป avatar
  showAvatar() {
    this.service.getNameAvatar(this.data).subscribe(
      (res) => {
        console.log(res)
          this.pic64 = res[0].picBase64

      }
    );
  }


}
