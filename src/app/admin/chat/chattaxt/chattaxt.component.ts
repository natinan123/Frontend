import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chattaxt',
  templateUrl: './chattaxt.component.html',
  styleUrls: ['./chattaxt.component.scss']
})
export class ChattaxtComponent implements OnInit {

  data: string[];
  texts: Object;

  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.getAll('descination');
    console.log(this.data);

    this.service.getTextMessage(this.data).subscribe(
      (res) => {
        console.log(res);
        this.texts = res;

      })
  }

}
