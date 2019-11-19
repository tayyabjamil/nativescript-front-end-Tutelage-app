import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-inputControlSelector',
  templateUrl: './inputControlSelector.component.html',
  styleUrls: ['./inputControlSelector.component.css']
})
export class InputControlSelectorComponent implements OnInit {

  @Input() rformGroup;
  @Input() generateForm = [];
  
  constructor() { }

  ngOnInit() {
  }

  
  checkType(args) {
    if (args instanceof Array) {
      return 'array'
    } else {
      return 'object'
    }
  }
}
