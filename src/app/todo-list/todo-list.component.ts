import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AsyncPipe } from '@angular/common';

import { AppComponent } from "../app.component";
import { Store } from '@ngrx/store';
import { AppState } from "../../Interfaces/AppState";
import * as todoActions from "../actions/todos.action";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private parentComponent: AppComponent, private store: Store<AppState>) {}
   

  todos = this.parentComponent.todos;

  ngOnInit() {
    
  }

  handleDelete(id: number): void{
    this.store.dispatch( new todoActions.DeleteItemAction(id) )
  }

}
