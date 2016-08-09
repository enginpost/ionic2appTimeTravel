import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  _disabledButton: boolean = true;
  _previousTime: string = '';
  _currentTime: string = '';
  _anotherTime: string = '';

  constructor(public navCtrl: NavController) {
    this._currentTime = new Date().getFullYear().toString() + " AD";
    this._anotherTime = this.pickRandomYear();
  }

  get currentTime():string{
    return this._currentTime;
  }

  get anotherTime():string{
    return this._anotherTime;
  }

  get disabledButton():boolean{
    return this._disabledButton;
  }

  private pickRandomYear(oldestYear:number = -4000, MostRecentYear:number = 4000){
    let randomYear: Number = Math.floor( Math.random() * (MostRecentYear - oldestYear + 1)) + oldestYear;
    return (randomYear > 0) ? (randomYear).toString() + " AD" : (-randomYear).toString() + " BC"; 
  }

  timeTravel(){
    this._previousTime = this._currentTime;
    this._currentTime = this._anotherTime;
    this.pickRandomYear();
    if( this._previousTime != ''){
      this._disabledButton = true;
    }else{
      this._disabledButton = false;
    }
  }

  goBack(){
    this.anotherTime = this.currentTime;
    this.currentTime = this._previousTime;
    this._previousTime = '';
  }

}
