import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   //subject es un objeto que contiene un observable y el observador (es)
   subject = new Subject();
  
   constructor() { }
 
   //subject emite a sus suscriptores el objeto my_object
   sendMsg(my_object:any) {
     this.subject.next(my_object)
   }
 
 
   // Retorna un observable para que los componentes x, y 
   //puedan subscribirse a él.
   getMsg() {
     return this.subject.asObservable()
   }
}
