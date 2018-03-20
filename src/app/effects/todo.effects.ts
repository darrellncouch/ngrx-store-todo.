import { Injectable } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";
import * as todoActions from "../actions/todos.action"
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

@Injectable()
export class TodoEffects {

    constructor(
        private todoService: TodoService,
        private actions$: Actions
    ) { }

    @Effect() loadTodos$ = this.actions$
        .ofType(todoActions.GET_TODOS_PENDING)
        .switchMap(() => this.todoService.getTodos())
        .map(items => new todoActions.LoadTodosSuccessAction(items))

    @Effect() deleteTodo$ = this.actions$
        .ofType(todoActions.DELETE_ITEM_PENDING)
        .switchMap(action => this.todoService.deleteTodo(action.payload))
        .map(todo => new todoActions.DeleteItemSuccessAction(todo))

    @Effect() addTodo$ = this.actions$
        .ofType(todoActions.ADD_ITEM_PENDING)
        .switchMap(action => this.todoService.addTodo(action.payload))
        .map(todo => new todoActions.AddNewTodoSuccessAction(todo))


}



