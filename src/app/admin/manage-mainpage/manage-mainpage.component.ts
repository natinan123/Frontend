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

  displayedColumns1: string[] = ['a', 'b', 'c', 'd'];
  dataSource1: MatTableDataSource<[any]>;


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
        this.dataSource1 = new MatTableDataSource(res as any[]);
        this.dataSource1.sort = this.sort;
        this.dataSource1.paginator = this.paginator;
        this.recom = res
      }
    )
  }
  // ตัวกรอง
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  closeModal() {
    this.modalService.dismissAll();
  }

}
