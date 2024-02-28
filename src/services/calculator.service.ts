import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private log: LoggerService) { }

  add(a:number, b:number){
    this.log.log('Add  method executed')
    return a + b;
  }

  subtract(a:number, b:number){
    return a - b;
  }
}
