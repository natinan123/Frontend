import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'q';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.scss']
})
export class ManageLocationComponent implements OnInit {
  displayedColumns: string[] = ['loc_name', 'provin_name', 'loc_zone', 'countLoc', 'edit', 'delete'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('add_success', { static: false }) add_success: ElementRef;
  @ViewChild('delect', { static: false }) delect: ElementRef;


  loc_name;




  public AddLocation = new FormGroup({
    Loc_name: new FormControl(''),
    Zone: new FormControl(''),
    Province_id: new FormControl(''),
    Location_id: new FormControl(''),
  })

  public updateLoc = new FormGroup({
    loc_name: new FormControl(''),
    Zone: new FormControl(''),
    Province_id: new FormControl(''),
  })
  location_id: any;
  zones: Object;
  Zone: any;
  Loc_name: any;
  provins: Object;
  zone_id: any;
  province_id: any;

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,

  ) { }

  ngOnInit() {
    this.getTable();
    this.getZonePro();


  }

  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        // console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onProvince(zone_id) {
    // console.log(zone_id);
    // const zone_id = this.zone_id
    this.service.getProvince(zone_id).subscribe(
      (res) => {
        console.log(res);
        this.provins = res;
      })
  }
  // เขต
  // onLocation(province_id) {
  //   console.log(province_id);
  //   this.service.getLocOfPro(province_id).subscribe(
  //     (res) => {
  //       // console.log(res);
  //       this.district = res;
  //     })
  // }

  getTable() {
    this.service.getLocation().subscribe(
      (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
  closeModal() {
    this.modalService.dismissAll();
  }

  openModalEditLoc(data, modal) {
    console.log(data);
    this.loc_name = data.loc_name;
    this.zone_id = data.zone_id;
    this.province_id = data.province_id;
    this.location_id = data.location_id;

    this.dialog.open(modal)
  }



  onUpdateLoc(loc_name, zone_id, province_id) {

    const data = {
      loc_name: loc_name,
      province_id: province_id,
      location_id: this.location_id
    }
    console.log(data)
    this.service.onLocation(data).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getTable();
        await delay(1000);
        this.modalService.dismissAll();
        this.dialog.closeAll();
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Modal 
  openModalAddloc(modal, data) {

    this.dialog.open(modal)
  }

  onModalDelete(data, modal) {
    this.location_id = data.location_id
    this.modalService.open(modal, { centered: true })
  }

  onDeleteLoc() {
    this.service.deleteLocation(this.location_id).subscribe(
      async (res) => {
        this.modalService.open(this.delect)
        this.getTable();
        await delay(1000);
        this.closeModal();
      }
    )
  }
  onAddlocation(Loc_name, province_id) {
    const data = {
      loc_name: Loc_name,
      province_id: province_id
    }
    console.log(data);

    this.service.postLocation(data).subscribe(
      async (res) => {
        this.modalService.open(this.add_success)
        await delay(1000);
        this.getTable();
        this.closeModal();

      }


    )
  }


}
