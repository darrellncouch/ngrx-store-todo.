import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./reducers/todos.reducer";


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoEffects } from './effects/todo.effects';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
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
