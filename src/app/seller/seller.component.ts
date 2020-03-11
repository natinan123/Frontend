import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  user: any;
  data: any;
  avatarname: any;
  pic64: any;
  ipAddress: any;

  constructor(
    private session: SessionService,
    private route: Router,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.data = this.user[0].email_id;
    this.showAvatar();
    this.putExpire()


  }

  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage'])
  }

  // รูป avatar
  showAvatar() {
    this.service.getNameAvatar(this.data).subscribe(
      (res) => {
        // console.log(res)
        this.avatarname = res[0].filename,
          this.pic64 = res[0].picBase64

      }
    );
  }

  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
  }

  // put อสังหาที่หมดอายุ
  putExpire() {
    this.service.putExpire().subscribe(
      (res) => {
      })
  }
}
