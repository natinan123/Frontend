import { Component, OnInit, ViewChild } from '@angular/core';
import { delay } from 'q';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  displayedColumns: string[] = ['e', 'f', 'g', 'h'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  recom_id: any;
  pro_id: any;
  pro: string[];
  pro_head: any;


  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.pro = this.route.snapshot.paramMap.getAll('recom_id');
    this.getTableProperty();
    console.log(this.pro)

  }

  // ตัวกรอง
  applyFilter2(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getTableProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openModalRecom(data, modal) {
    // console.log(data);
    this.pro_id = data.pro_id;
    this.recom_id = data.recom_id;
    this.pro_head = data.pro_head;

    this.modal.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }

  onUpdateRecom() {
    const data = {
      recom_id: this.pro,
      pro_id: this.pro_id
    }
    console.log(this.pro_id)

    console.log(data)
    this.service.onRecom(data).subscribe(
      async (res) => {

        this.getTableProperty();
        await delay(500);
        this.modalService.dismissAll();

        this.router.navigate(['admin/admin/managemainpage']);

      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
