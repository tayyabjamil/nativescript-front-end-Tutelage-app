import { Component, OnInit, Input } from '@angular/core';
import { horizontalAlignmentProperty } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() row = 0;
  @Input() class ='';

  @Input() colspan =0;

  @Input() col = 0;
  @Input() icon  = ''; //'#&x342;';
  
  constructor() { }

  ngOnInit() {
  }

}
