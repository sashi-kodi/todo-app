import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todos:Todo[];
   public messageCenter = new BehaviorSubject("Hello everyone");
  
   
  constructor() {
    this.todos =[{id:1, task:'prep for interview', done: false}, {id: 2, task:'walk the dog', done: false}];
   
  }
  
  getData = ()=>{
    
    return this.todos;
  }
 addTodo =(newtodo)=>{
    this.todos.sort(function(a,b){
       return a.id -b.id;
    });
    let lastid = (this.todos[this.todos.length-1]).id;
    this.todos.push({done: false, id: ++lastid, task:newtodo});
 }
 sendMessage = (msg: string)=>{
 this.messageCenter.next(msg);
 
 }
 remove = (index: number)=>{
     this.todos.splice(index,1);
 }
}
