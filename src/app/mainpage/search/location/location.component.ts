import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;



  public loc_search = new FormGroup({
    Zone: new FormControl(''),
    Location_id: new FormControl('')

  })

  province: Object;
  zones: Object;
  Loc_zones: any;
  loc_zone: any;
  selectedValue: any;
  provins: Object;


  //How do I filter based on selected value? 
  search(selectedValue: string, selectedValueEle: string) {
    selectedValue = selectedValue.trim(); // Remove whitespace
    selectedValue = selectedValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = selectedValue || selectedValueEle;

  }


  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,

  ) { }

  ngOnInit() {

    this.getZonePro();
    this.getTablepro();
    // console.log(this.Province);
  }


  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onLocation() {
    this.loc_zone = this.selectedValue
    console.log(this.loc_zone)
    this.service.getProvince(this.loc_zone).subscribe(
      (res) => {
        console.log(res);

        this.provins = res;

      })

  }

  // ตัวกรอง
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTablepro() {
    this.service.getProperty().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }


}
