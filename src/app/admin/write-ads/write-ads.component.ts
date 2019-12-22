import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write-ads',
  templateUrl: './write-ads.component.html',
  styleUrls: ['./write-ads.component.scss']
})
export class WriteAdsComponent implements OnInit {

  

  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private http: HttpClient,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
   
  }

  

}
