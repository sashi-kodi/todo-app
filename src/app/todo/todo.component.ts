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
      this.todoService.messageCenter
      .subscribe((msg)=>{
      console.log(msg);
      }, (err)=>{
         console.log(err);
      });
  }

  ngOnInit(){
     this.todos = this.todoService.getData();
  }
  addNewTodo =(value)=>{
    this.todoService.addTodo(value);
    this.todoService.sendMessage("adding a new todo");
  }
  remove = (id: number)=>{
     this.todoService.remove(id);
     this.todos = this.todoService.getData();
     this.todoService.sendMessage("deleting a todo");
  }

}
