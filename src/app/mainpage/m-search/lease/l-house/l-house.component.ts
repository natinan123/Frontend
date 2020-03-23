import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-l-house',
  templateUrl: './l-house.component.html',
  styleUrls: ['./l-house.component.scss']
})
export class LHouseComponent implements OnInit {
  houses: Object;
  user: any;
  status: any;
  link: string;
  pageSize = 16;
  page = 1;
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
    this.getTableHouse();
    this.link = '/mainpage/mainpage/property';
  }

  type_id = 1;
  pro_sell = "เช่า";
  getTableHouse() {
    const data = {
      type_id: this.type_id,
      pro_sell: this.pro_sell
    }
    console.log(data);
    this.service.get_selltype(data).subscribe(
      (res) => {
        console.log(res);
        this.houses = res;
      }
    )
  }

}
