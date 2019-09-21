import { Component, OnInit ,Input} from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'ns-textview',
  templateUrl: './textview.component.html',
  styleUrls: ['./textview.component.css']
})
export class TextviewComponent implements OnInit {
pageSide;
  constructor(private pageService:PageService) { }

  ngOnInit() {
    this.pageSide = this.pageService.pageSidePadding();
  }

}
