import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Todo} from '../todo';
@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  @Input() todos: Todo[];
    @Output() newTodoAdded = new EventEmitter<string>();
    @Output() deleteTodo = new EventEmitter<number>();
    
    @ViewChild('newtodo') newtodo:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  
  addTodo = (newtodo: string)=>{
     console.log('from child'+ newtodo);
     this.newTodoAdded.emit(newtodo);
     this.newtodo.nativeElement.value='';
  }
  
  remove = (id: number)=>{
      this.deleteTodo.emit(id);
  }
}
