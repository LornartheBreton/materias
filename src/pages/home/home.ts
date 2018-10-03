import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { MiPage } from '../mi/mi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  cs=CsPage;
  mi=MiPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }
  clickCS(){
    this.navCtrl.push(this.cs);
  }
  clickMI(){
    this.navCtrl.push(this.mi);
  }
}
