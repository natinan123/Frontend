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
  displayedColumns: string[] = ['loc_name', 'loc_zone', 'countLoc', 'edit', 'delete'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('add_success', { static: false }) add_success: ElementRef;
  @ViewChild('delect', { static: false }) delect: ElementRef;


  loc_name;


  public AddLocation = new FormGroup({
    Loc_name: new FormControl(''),
    Zone: new FormControl('')
  })

  public updateLoc = new FormGroup({
    loc_name: new FormControl(''),
    Zone: new FormControl(''),

  })
  location_id: any;
  zones: Object;
  Zone: any;
  Loc_name: any;

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


  getTable() {
    this.service.getLocation().subscribe(
      (res) => {
        
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
    this.Zone = data.Zone;
    this.location_id = data.location_id;

    this.modal.open(modal, { centered: true })
  }



  onUpdateLoc() {
    console.log(this.updateLoc.value)
    const data = {
      loc_name: this.loc_name,
      loc_zone: this.Zone,
      location_id: this.location_id
    }
    console.log(data)
    this.service.onLocation(data).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getTable();
        await delay(1000);
        this.closeModal();

      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Modal 
  openModalAddloc(modal, data) {

    this.modalService.open(modal, { centered: true })
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
  onAddlocation() {
    const data = {
      loc_name: this.Loc_name,
      loc_zone: this.Zone
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

  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        console.log(res);
        this.zones = res;
      }
    )
  }
}
