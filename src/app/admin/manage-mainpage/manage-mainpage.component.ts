import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-mainpage',
  templateUrl: './manage-mainpage.component.html',
  styleUrls: ['./manage-mainpage.component.scss']
})
export class ManageMainpageComponent implements OnInit {




  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild('success', { static: false }) success: ElementRef;
  recom_id: any;
  pro_id: any;
  recom: Object;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.service.getRecommend().subscribe(
      (res) => {
   
        this.recom = res
      }
    )
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
