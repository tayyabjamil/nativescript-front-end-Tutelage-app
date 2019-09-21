import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import * as imagepicker from "nativescript-imagepicker";

@Component({
  selector: 'ns-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  pageSide;
  imageSrc: any;
  previewSize: number;
  @Output() selectedImage = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.previewSize = deviceWidth * 0.25;
   this.pageSide=deviceHeight*0.10;
  }


  public onSelectSingleTap() {
    let context = imagepicker.create({
      mode: "single"
    });
    this.startSelection(context);
  }

  private startSelection(context) {
    let that = this;
    context
      .authorize()
      .then(() => {
        that.imageSrc = null;
        return context.present();
      })
      .then((selection) => {
        console.log("Selection done: " + JSON.stringify(selection));
        that.imageSrc = selection[0]
        this.selectedImage.emit(that.imageSrc);
      }).catch(function (e) {
        console.log(e);
      });
  }

}
