import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'ns-textField',
  templateUrl: './textField.component.html',
  styleUrls: ['./textField.component.scss'],
  moduleId:module.id
})
export class TextFieldComponent implements OnInit {
  
  @Input() rformgroup: FormGroup;
  @Input() rcontrolname;
 
  @Input() rtext;
  @Input() row;
  @Input() col=0;
  @Input() class;
  
  pageSide;
  
  constructor(private pageService: PageService) { }

  ngOnInit() {
    // const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    // const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.pageSide = this.pageService.pageSidePadding();
  }

  get invalidControl() {
    if (this.rformgroup.dirty &&
      this.rformgroup.controls[this.rcontrolname].touched &&
      this.rformgroup.controls[this.rcontrolname].invalid)
      return true;
    else{
   return false;
    }
  }

  get errorRequired() {
    if (this.rformgroup.dirty &&
      this.rformgroup.controls[this.rcontrolname].touched &&
      this.rformgroup.controls[this.rcontrolname].errors &&
      this.rformgroup.controls[this.rcontrolname].errors.required) {
      return true;
    } else {
      return false;
    }
  }

  get errorFormate() {
    if (this.rformgroup.dirty &&
      this.rformgroup.controls[this.rcontrolname].touched &&
      this.rformgroup.controls[this.rcontrolname].errors &&
      this.rformgroup.controls[this.rcontrolname].errors.email) {
      return true;
    } else {
      return false;
    }
  }
  get errorLength() {
    if (this.rformgroup.dirty &&
      this.rformgroup.controls[this.rcontrolname].touched &&
      this.rformgroup.controls[this.rcontrolname].errors &&
      this.rformgroup.controls[this.rcontrolname].errors.minlength) {
      return true;
    } else {
      return false;
    }
  }

}
