import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import { DisplayTodoComponent } from './display-todo/display-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DisplayTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
