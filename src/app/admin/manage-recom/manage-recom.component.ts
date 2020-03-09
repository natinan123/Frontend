import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-recom',
  templateUrl: './manage-recom.component.html',
  styleUrls: ['./manage-recom.component.scss']
})
export class ManageRecomComponent implements OnInit {
  searchText;
  packet_list: any;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
  ) { }

  ngOnInit() {
    this.getPacket();
  }

  // รายการส่งมาร้องขอแนะนำ
  getPacket() {
    this.service.getPacket().subscribe(
      (res) => {
        // console.log(res);
        this.packet_list = res;

      }
    )
  }




}
