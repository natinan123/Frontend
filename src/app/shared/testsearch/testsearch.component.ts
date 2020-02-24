import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-testsearch',
  templateUrl: './testsearch.component.html',
  styleUrls: ['./testsearch.component.scss']
})
export class TestsearchComponent implements OnInit {
  title = 'Angular 7 CheckBox Select/ Unselect All';

  checkedList: any;


  masterSelected = false;
  checklist = [
    { id: 1, value: 'Elenor Anderson', isSelected: false },
    { id: 2, value: 'Caden Kunze', isSelected: true },
    { id: 3, value: 'Ms. Hortense Zulauf', isSelected: true },
    { id: 4, value: 'Grady Reichert', isSelected: false },
    { id: 5, value: 'Dejon Olson', isSelected: false },
    { id: 6, value: 'Jamir Pfannerstill', isSelected: false },
    { id: 7, value: 'Aracely Renner DVM', isSelected: false },
    { id: 8, value: 'Genoveva Luettgen', isSelected: false }
  ];


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getCheckedItemList();

  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


}
