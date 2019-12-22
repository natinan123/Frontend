import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  displayedColumns: string[] = ['a', 'b', 'c', 'd'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('success', {static: false}) success: ElementRef;
  public edit_detail = new FormGroup({
    pro_limit: new FormControl(''),
    limit_id: new FormControl(''),
  })


  id;
  data;
  private sub: any;
  email_id: any;
  fname;
  lname;
  id_line;
  facebook;
  profile_pic;
  cus_detail;
  cus_status;
  phone;
  pro_limit: any;
  limit_id: any;
  limit: Object;
  // Pro_limit: any;
  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private router: Router,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.getLimit();
    this.data = this.route.snapshot.paramMap.getAll('email_id');

    // console.log(this.id)
    console.log(this.data)

    this.service.getProfile(this.data).subscribe(
      (res) => {
        this.email_id = res[0].email_id,
          this.fname = res[0].fname,
          this.lname = res[0].lname,
          this.id_line = res[0].id_line,
          this.facebook = res[0].facebook,
          this.profile_pic = res[0].profile_pic,
          this.cus_detail = res[0].cus_detail,
          this.cus_status = res[0].cus_status,
          this.phone = res[0].phone,
          this.pro_limit = res[0].pro_limit,
          this.limit_id = res[0].limit_id

      }
    )



  }

  // ระดับ
  getLimit() {
    this.service.getLimited().subscribe(
      (res) => {
        console.log(res);
        this.limit = res;
      }
    )
  }

  onUpdateLimit() {
    const data = {
      limit_id: this.limit_id,
      email_id: this.email_id
    }

    console.log(data);
    console.log(this.edit_detail);
    this.service.postProLimit(data).subscribe(
      async (res) => {
        this.modalService.open(this.success);


        await delay(2000);
        this.router.navigate(['admin/admin/managemember']);
        this.modalService.dismissAll();
      }
    )
  }


  // modal สิทธิ์ประกาศ
  openModalLimit(content) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
