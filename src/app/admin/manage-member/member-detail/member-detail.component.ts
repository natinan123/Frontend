import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

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
  user: any;
  My: any;
  add_email: any;
  descination: any;
  // Pro_limit: any;
  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private session: SessionService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private router: Router,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.My = this.user[0].email_id;

    this.data = this.route.snapshot.paramMap.getAll('email_id');

    // console.log(this.id)
    console.log(this.data)

    this.service.getProfile(this.data).subscribe(
      (res) => {
        console.log(res);
        this.email_id = res[0].email_id,
          this.fname = res[0].fname,
          this.lname = res[0].lname,
          this.id_line = res[0].id_line,
          this.facebook = res[0].facebook,
          this.profile_pic = res[0].profile_pic,
          this.cus_detail = res[0].cus_detail,
          this.cus_status = res[0].cus_status,
          this.phone = res[0].phone
   

      }
    )



  }

  
  addChat() {
    console.log();
    this.add_email = this.email_id;
    this.descination = this.email_id;
    this.postFirstChat();

  }
  // ส่งข้อความติดต่อครั้งแรก
  postFirstChat() {
    const data = {
      source: this.user[0].email_id,
      descination: this.add_email
    }
    console.log(data);
    this.service.postFirstChat(data).subscribe(
      async (res) => {
        this.modalService.dismissAll();
        this.router.navigate(['admin/admin/chat']);

      }
    )
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
