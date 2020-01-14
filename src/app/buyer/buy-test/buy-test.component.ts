import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-test',
  templateUrl: './buy-test.component.html',
  styleUrls: ['./buy-test.component.scss']
})
export class BuyTestComponent implements OnInit {
at = new FormControl();

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
   
  }

 


}

