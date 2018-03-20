import * as todoActions from "./../actions/todos.action";

export function todoReducer(state = [], action: todoActions.Action) {

    switch (action.type) {

        case todoActions.GET_TODOS_SUCCESS:
            return action.payload;

        case todoActions.DELETE_ITEM_SUCCESS:
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }

}