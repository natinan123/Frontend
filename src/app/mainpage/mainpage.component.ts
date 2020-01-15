import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { NgbModal, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../@service/session.service';
import { ServerService } from '../@service/server.service';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @ViewChild('success', { static: false }) success: ElementRef;
  @ViewChild('error', { static: false }) error: ElementRef;
  @ViewChild('loginerror', { static: false }) loginerror: ElementRef;
  @ViewChild('emailerror', { static: false }) emailerror: ElementRef;
  user;
  email_id;
  password;
  hide = true;


  fname;
  lname;
  repassword;
  phone;
  id_line;
  // loading = false;
  // submitted = false;


  public loginUser = new FormGroup({
    email_id: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),

  })

  public registerForm = new FormGroup({
    Fname: new FormControl(''),
    Lname: new FormControl(''),
    EmailRegis: new FormControl(''),
    Password: new FormControl(''),
    Repassword: new FormControl(''),
    Phone: new FormControl(''),
    Id_line: new FormControl(''),
    Cus_status: new FormControl(''),
  })
  Fname: any;
  Lname: any;
  EmailRegis: any;
  Password: any;
  Repassword: any;
  Phone: any;
  Id_line: any;
  Cus_status: any;
  getErrorMessage() {
    return this.email_id.hasError('required') ? 'You must enter a value' :
      this.email_id.hasError('email_id') ? 'Not a valid email' :
        '';
  }



  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }



  constructor(
    private modalService: NgbModal,
    private session: SessionService,
    private service: ServerService,
    private route: Router,
    private alertConfig: NgbAlertConfig


  ) { }

  ngOnInit() {

    this.user = this.session.getActiveUser();

    if (this.user == null || this.user === "") {
      this.route.navigate(['/mainpage/mainpage/home'])
    }
    if (this.user !== null || this.user !== "") {
      if (this.user[0].cus_status === "admin" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
        this.route.navigate(['/admin/admin/adminhome'])
      }
      if (this.user[0].cus_status === "seller" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
        this.route.navigate(['/seller/seller/sellerhome'])
      }
      if (this.user[0].cus_status === "buyer" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
        this.route.navigate(['/buyer/buyer/buyerhome'])
      }

    }


  }


  // Modal Login
  openModalLogin(modal, data) {
    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }




  onLogin() {
    console.log(this.loginUser.value)
    // const data = {
    //   email_id: this.email_id.value,
    //   password: this.password.value
    // }
    // console.log(this.)
    if (this.email_id != null && this.password != null) {
      this.service.getLogin(this.loginUser.value).subscribe(
        async (res) => {
          this.session.setActiveUser(res);
          if (res[0].cus_status === "admin") {
            this.route.navigate(['/admin']);
            this.modalService.dismissAll();
            this.modalService.open(this.success);
            await delay(3000);
            this.modalService.dismissAll();
          }
          if (res[0].cus_status === "seller") {
            this.route.navigate(['/seller']);
            this.modalService.dismissAll();
            this.modalService.open(this.success);
            await delay(3000);
            this.modalService.dismissAll();
          }
          if (res[0].cus_status === "buyer") {
            this.route.navigate(['/buyer']);
            this.modalService.dismissAll();
            this.modalService.open(this.success);
            await delay(3000);
            this.modalService.dismissAll();
          }
        },
        (err) => {
          this.modalService.open(this.loginerror);
        }
      )
    }
    else {
      this.modalService.open(this.loginerror);

    }

  }
  onLogout() {
    this.session.clearActiveUser();
    window.history.go(0);
  }



  // Register
  openModalRegister(modal) {
    this.modalService.open(modal, { centered: true })
    // this.modalService.open(modal, { centered: true, size: "lg" })
  }

  onRegister() {
    // console.log(this.registerForm.value)
    const data = {
      fname: this.Fname,
      lname: this.Lname,
      email_id: this.EmailRegis,
      password: this.Password,
      repassword: this.Repassword,
      phone: this.Phone,
      id_line: this.Id_line,
      cus_status: this.Cus_status
      
    }
    console.log(data)//if  ทุก คอลัมไม่เท่ากับว่าง
    if (this.repassword === this.password) {
      this.service.onRegisterSell(data).subscribe(

        async (res) => {
          this.modalService.open(this.success)
          await delay(1000);
          this.modalService.dismissAll();
          window.history.go(0);
        },

        (err) => {
          this.modalService.open(this.error)
          this.modalService.dismissAll();
        }
      )
    } else {
      this.modalService.open(this.error)
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
