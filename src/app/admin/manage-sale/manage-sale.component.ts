import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-sale',
  templateUrl: './manage-sale.component.html',
  styleUrls: ['./manage-sale.component.scss']
})
export class ManageSaleComponent implements OnInit {

  displayedColumns: string[] = ['1', '2', '3', '4', '5'];
  dataSource: MatTableDataSource<[any]>;
  displayedColumns2: string[] = ['6', '7', '8', '9', '10'];
  dataSource2: MatTableDataSource<[any]>;
  displayedColumns3: string[] = ['11', '12', '13', '14', '15'];
  dataSource3: MatTableDataSource<[any]>;
  displayedColumns4: string[] = ['16', '17', '18', '19', '20'];
  dataSource4: MatTableDataSource<[any]>;
  displayedColumns5: string[] = ['21', '22', '23', '24', '25'];
  dataSource5: MatTableDataSource<[any]>;
  displayedColumns6: string[] = ['26', '27', '28', '29', '30'];
  dataSource6: MatTableDataSource<[any]>;


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getTableHouse();
    this.getTableTownhouse();
    this.getTableApartment();
    this.getTableCommercial();
    this.getTableCondominium();
    this.getTableLand();

  }

  getTableHouse() {
    this.service.getHouse().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    )
  }

  getTableTownhouse() {
    this.service.getTownhouse().subscribe(
      (res) => {
        this.dataSource2 = new MatTableDataSource(res as any[]);
        this.dataSource2.sort = this.sort;
        this.dataSource2.paginator = this.paginator;
      }
    )
  }
  getTableApartment() {
    this.service.getApartment().subscribe(
      (res) => {
        this.dataSource3 = new MatTableDataSource(res as any[]);
        this.dataSource3.sort = this.sort;
        this.dataSource3.paginator = this.paginator;
      }
    )
  }
  getTableCommercial() {
    this.service.getCommercial().subscribe(
      (res) => {
        this.dataSource4 = new MatTableDataSource(res as any[]);
        this.dataSource4.sort = this.sort;
        this.dataSource4.paginator = this.paginator;
      }
    )
  }
  getTableCondominium() {
    this.service.getCondominium().subscribe(
      (res) => {
        this.dataSource5 = new MatTableDataSource(res as any[]);
        this.dataSource5.sort = this.sort;
        this.dataSource5.paginator = this.paginator;
      }
    )
  }
  getTableLand() {
    this.service.getLand().subscribe(
      (res) => {
        this.dataSource6 = new MatTableDataSource(res as any[]);
        this.dataSource6.sort = this.sort;
        this.dataSource6.paginator = this.paginator;
      }
    )
  }
  // ตัวกรอง
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
