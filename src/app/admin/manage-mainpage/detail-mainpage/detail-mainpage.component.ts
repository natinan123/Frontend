import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-mainpage',
  templateUrl: './detail-mainpage.component.html',
  styleUrls: ['./detail-mainpage.component.scss']
})
export class DetailMainpageComponent implements OnInit {
  data_id: string;

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data_id = this.route.snapshot.paramMap.get('pro_id');
    console.log(this.data_id);
  }

}
