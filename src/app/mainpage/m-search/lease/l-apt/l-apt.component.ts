import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-l-apt',
  templateUrl: './l-apt.component.html',
  styleUrls: ['./l-apt.component.scss']
})
export class LAptComponent implements OnInit {

  apt: Object;
  link: string;
  pageSize = 16;
  page = 1;
  user: any;
  status: any;
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
    this.getTableApt();
    this.link = '/mainpage/mainpage/property';
  }

  type_id = 3;
  pro_sell = "เช่า";
  getTableApt() {
    const data = {
      type_id: this.type_id,
      pro_sell: this.pro_sell
    }
    console.log(data);
    this.service.get_selltype(data).subscribe(
      (res) => {
        console.log(res);
        this.apt = res;
      }
    )
  }
}
