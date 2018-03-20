import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { AppState } from "../../Interfaces/AppState";
import * as todoActions from "../store/actions/todos.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todos: Observable<ITodoItem[]>;

  constructor(private store: Store<AppState>) { 
    this.todos = this.store.select(state => state.todos);
   }

  ngOnInit() {
    this.getTodos();
  }

  

  getTodos() {
    this.store.dispatch( new todoActions.LoadTodosAction() )
  }

}
