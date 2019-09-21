import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {

  @Input() userType;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    
  }

  onNavigate(url) {
    this.routerExtensions.navigate([url])    
  }

}
