import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]=[];
  constructor(private todoService: TodoService) { 
  }

  ngOnInit(){
     this.todos = this.todoService.getData();
  }
  addNewTodo =(value)=>{
    this.todoService.addTodo(value);
  }
  remove = (id: number)=>{
     this.todoService.remove(id);
     this.todos = this.todoService.getData();
  }

}
