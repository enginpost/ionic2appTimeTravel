import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormatYear} from '../../pipes/FormatYear';

@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes:[FormatYear]
})
export class HomePage {

// PRIVATE class variables
  private _disabledButton: boolean = true;
  private _previousTime: string[] = [];
  private _currentTime: string = '';
  private _anotherTime: string = '';

// CONSTRUCTOR for the page class
  constructor(public navCtrl: NavController) {
    this._currentTime = new Date().getFullYear().toString();
    this._anotherTime = this.pickRandomYear();
  }

// PUBLIC Class read-only properties
  public get currentTime():string{
    return this._currentTime;
  }

  public get anotherTime():string{
    return this._anotherTime;
  }

  public get disabledButton():boolean{
    return this._disabledButton;
  }

// PUBLIC Class methods
  public timeTravel(){
    this._previousTime.push( this._currentTime);
    this._currentTime = this._anotherTime;
    this._anotherTime = this.pickRandomYear();
    this.checkGoBackEnabled();
  }

  public goBack(){
    this._anotherTime = this._currentTime;
    this._currentTime = this._previousTime.pop();
    this.checkGoBackEnabled();
  }

// PRIVATE Class methods
  private pickRandomYear(oldestYear:number = -4000, MostRecentYear:number = 4000){
    let randomYear: Number = Math.floor( Math.random() * (MostRecentYear - oldestYear + 1)) + oldestYear;
    return randomYear.toString();
    //return (randomYear > 0) ? (randomYear).toString() + " AD" : (-randomYear).toString() + " BC"; 
  }

  private checkGoBackEnabled(){
    if( this._previousTime.length > 0 ){
      this._disabledButton = null;  // needs to be NULL and not FALSE
    }else{
      this._disabledButton = true;
    }
  }

}
