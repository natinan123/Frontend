import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-s-house',
  templateUrl: './s-house.component.html',
  styleUrls: ['./s-house.component.scss']
})
export class SHouseComponent implements OnInit {
  houses: Object;
  pageSize = 16;
  page = 1;
  user: any;
  status: any;
  link: string;
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
    this.user = this.session.getActiveUser();
    console.table(this.user);
    this.status = this.user[0].cus_status;
    if (this.user == null) {
      this.link = '/mainpage/mainpage/detail';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/detail';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/detail';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/detail';
    }
  }

  type_id = 1;
  pro_sell = "ขาย";
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
