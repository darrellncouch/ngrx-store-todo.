export const GET_TODOS_PENDING = "GET_TODOS_PENDING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const DELETE_ITEM_PENDING = "DELETE_ITEM_PENDING";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const ADD_ITEM_PENDING = "ADD_ITEM_PENDING";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";

export class LoadTodosAction {
  readonly type = GET_TODOS_PENDING;
  constructor() { }
}

export class LoadTodosSuccessAction {
  readonly type = GET_TODOS_SUCCESS;
  constructor(public payload: ITodoItem[]) { }
}

export class DeleteItemAction {
  readonly type = DELETE_ITEM_PENDING;
  constructor(public payload: number) { }
}

export class DeleteItemSuccessAction {
  readonly type = DELETE_ITEM_SUCCESS;
  constructor(public payload: ITodoItem[]) { }
}

export class AddNewTodoAction {
  readonly type = ADD_ITEM_PENDING;
  constructor(public payload: string) {}
}

export class AddNewTodoSuccessAction {
  readonly type = ADD_ITEM_SUCCESS;
  constructor(public payload: ITodoItem[]){}
}


export type Action
  = LoadTodosAction
  | LoadTodosSuccessAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | AddNewTodoAction
  | AddNewTodoSuccessAction
