import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { MiPage } from '../mi/mi';
import { ComPage } from '../com/com';
import { PappsPage } from '../papps/papps';
import { RobPage } from '../rob/rob';
import { DibPage } from '../dib/dib';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  cs=CsPage;
  mi=MiPage;
  com=ComPage;
  papps=PappsPage;
  rob=RobPage;
  dib=DibPage;
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
  clickCOM(){
    this.navCtrl.push(this.com);
  }
  clickPAPPS(){
    this.navCtrl.push(this.papps);
  }
  clickROB(){
    this.navCtrl.push(this.rob);
  }
  clickDIB(){
    this.navCtrl.push(this.dib);
  }
}
