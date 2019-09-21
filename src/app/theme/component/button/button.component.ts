import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() row = 0;
  @Input() col = 0;
  @Input() marginRight = 0;
  @Input() marginLeft = 0;
  @Input() marginBottom = 0;
  @Input() marginTop = 0;
  @Input() text = '';

  @Output() onTap = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTaped() {
    this.onTap.emit();
  }

}
