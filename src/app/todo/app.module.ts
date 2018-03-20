import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";
import { FormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { todoReducer } from "../store/reducers/todos.reducer";


import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoEffects } from '../store/effects/todo.effects';
import { TodoService } from '../store/services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //this needs to be below router
    StoreModule.forRoot({ 
      todos: todoReducer
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
