import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-s-commer',
  templateUrl: './s-commer.component.html',
  styleUrls: ['./s-commer.component.scss']
})
export class SCommerComponent implements OnInit {

  user: any;
  status: any;
  link: string;
  pageSize = 16;
  page = 1;
  commer: Object;
  constructor(
    private session: SessionService,
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.getTableCommer();
    this.link = '/mainpage/mainpage/property';
  }

  type_id = 4;
  pro_sell = "ขาย";
  getTableCommer() {
    const data = {
      type_id: this.type_id,
      pro_sell: this.pro_sell
    }
    console.log(data);
    this.service.get_selltype(data).subscribe(
      (res) => {
        console.log(res);
        this.commer = res;
      }
    )
  }

}
