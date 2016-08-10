import {Pipe} from '@angular/core';

@Pipe({name:'formatYear'})

export class FormatYear{
  transform(value, args){
    if( value == null){
      return value;
    }else{
      return (Number(value) > 0) ? Number(value).toString() + " AD" : (Number(value)*-1).toString() + " BC";
    }
  }
}
