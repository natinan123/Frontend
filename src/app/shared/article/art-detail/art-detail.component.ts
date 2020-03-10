import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {


  data;
  article_id: any;
  articl_head: any;
  art_detail1: any;
  art_detail2: any;
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


}
