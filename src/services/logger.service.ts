import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];
  constructor() { }

  log(m:string){
    this.messages.push(m);
  }
}
