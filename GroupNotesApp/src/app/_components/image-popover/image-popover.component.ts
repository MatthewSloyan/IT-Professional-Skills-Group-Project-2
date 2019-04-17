import { Component, OnInit} from '@angular/core';
import { NavParams } from '@ionic/angular';
//import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-image-popover',
  templateUrl: './image-popover.component.html',
  styleUrls: ['./image-popover.component.scss']
})
export class ImagePopoverComponent implements OnInit {

  imageUrl: string;

  constructor(public navParams: NavParams) { 
      this.imageUrl = this.navParams.get('url');
  }

  ngOnInit() {
  }

  //close the popover page
  // close() {
  //   this.viewCtrl.dismiss(); 
  // }
}