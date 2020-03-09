import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-approve',
  templateUrl: './list-approve.component.html',
  styleUrls: ['./list-approve.component.scss']
})
export class ListApproveComponent implements OnInit {

  pageSize = 16;
  page = 1;
  searchText;
  listWait: Object;
  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getListProWait();
  }

  getListProWait() {
    this.service.getListProWait().subscribe(
      (res) => {
        console.log(res);
        this.listWait = res;
      }
    )
  }

}
