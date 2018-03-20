import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AsyncPipe } from '@angular/common';

import { AppComponent } from "../../app.component";
import { Store } from '@ngrx/store';
import { AppState } from "../../../../Interfaces/AppState";
import * as todoActions from "../../../store/actions/todos.action";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<AppState> ) { }

  ngOnInit() {
  }

  inputValue: string;

  addItem(): void {
    this.store.dispatch( new todoActions.AddNewTodoAction(this.inputValue))
    this.inputValue = "";
  }

}
