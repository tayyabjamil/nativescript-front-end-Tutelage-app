import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit,Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { AnimationCurve } from "ui/enums";
import { screen } from "platform";
import { setTimeout } from "timer";
import * as platformModule from 'tns-core-modules/platform';
@Component({
  selector: 'ns-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {

  @Input() userType;
  onSelectUserType;
iconSize;
	@ViewChild('tabHighlight', { static: false }) tabHighlight: ElementRef;
	selectedTab: number = 0;

	@ViewChild('image1', { static: false }) image1: ElementRef;
	@ViewChild('image2', { static: false }) image2: ElementRef;
	@ViewChild('image3', { static: false }) image3: ElementRef;
	@ViewChild('image4', { static: false }) image4: ElementRef;
	@ViewChild('image5', { static: false }) image5: ElementRef;

	@Output() tabSelected = new EventEmitter<number>();

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.iconSize = deviceWidth * 0.095;
  }
  onAccountSelection(user) {
    this.userType = user;
    this.onSelectUserType.emit(user);
  }

  get showType() {
    return this.userType;
  }


  ngAfterViewInit() {
		setTimeout(() => { this.animateCurrentImage(this.image1); }, 100);
	}

	selectTab(index: number) {
		let previousTab = this.selectedTab;
		if (index != this.selectedTab) {
			this.selectedTab = index;
			this.tabHighlight.nativeElement.animate({
				translate: { x: index * screen.mainScreen.widthDIPs / 4, y: 0 },
				curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
				duration: 400
			})
			this.animateCurrentImage(this.getImage(index));
			this.animatePreviousImage(this.getImage(previousTab));
			this.tabSelected.emit(this.selectedTab);
		}
	}

	getImage(index) {
		let currentImage;
		switch (index) {
			case 0:
				currentImage = this.image1;
				break;
			case 1:
				currentImage = this.image2;
				break;
			case 2:
				currentImage = this.image3;
				break;
			case 3:
				currentImage = this.image4;
				break;
			case 4:
				currentImage = this.image5;
				break;
			default:
				break;
		}
		return currentImage;
	}

	animateCurrentImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1.2, y: 1.2 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 400
		});
	}

	animatePreviousImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1, y: 1 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 400
		})
	}
  onNavigate(url) {
    this.routerExtensions.navigate([url])    
  }

}
