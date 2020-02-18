import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { google } from '@agm/core/services/google-maps-types';
import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  imagePath: any;

  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
        description: 'Description 1'
      },
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
        title: 'First image title',
        alt: 'First image alt',
        ariaLabel: 'First image aria-label'
      }
    ),
    new Image(1, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-47223.jpeg' }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg' }),
    new Image(
      2,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-52062.jpeg',
        description: 'Description 3',
        title: 'Third image title',
        alt: 'Third image alt',
        ariaLabel: 'Third image aria-label'
      },
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
        description: 'Description 3'
      }
    ),
    new Image(
      3,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
        description: 'Description 4',
        title: 'Fourth image title (modal obj)',
        alt: 'Fourth image alt (modal obj)',
        ariaLabel: 'Fourth image aria-label (modal obj)'
      },
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg',
        title: 'Fourth image title (plain obj)',
        alt: 'Fourth image alt (plain obj)',
        ariaLabel: 'Fourth image aria-label (plain obj)'
      }
    ),

    new Image(4,
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-93750.jpeg' },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg' }),

    new Image(5,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-94420.jpeg',
        description: 'Description 6'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg' }
    ),
    new Image(6, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-96947.jpeg' },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-96947.jpg' })
  ];

  public fourthFormGroup = new FormGroup({

    Area: new FormControl('')

  })



  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private MouseEvent: FormBuilder,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
    this.getimageTast();



  }

  getimageTast() {
    this.service.getimageTast().subscribe(
      (res) => {
        console.log(res)
        // this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +
        //   res)
        this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +
          res)
        console.log(this.imagePath);
      }
    )
  }

  // ราคาแนะนำ
  getGuide_price(area) {
    const pro_area = area
    console.log(pro_area);

    this.service.getGuide_price(pro_area).subscribe(
      (res) => {
        console.log(res);
        // this.types = res;
      }
    )
  }

}
