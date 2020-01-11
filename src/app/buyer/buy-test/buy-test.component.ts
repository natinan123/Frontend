import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-buy-test',
  templateUrl: './buy-test.component.html',
  styleUrls: ['./buy-test.component.scss']
})
export class BuyTestComponent implements OnInit {

 


  value: number = 0 ;
  highValue: number = 1000000;
  options: Options = {
    floor: 0,
    ceil: 50000000,
    // disabled: !element.active,
    showSelectionBar: true,

    step: 1000,
    // showTicks: true
    translate: function(value) {
      return  value + ' ' + 'บาท'  
    },
  };


  constructor() {

  }

  ngOnInit() {

  }

  onCheck(value, highValue) {
    console.log(value, highValue);

  }


}
