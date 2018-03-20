import * as todoActions from "./../actions/todos.action";

export function todoReducer(state = [], action: todoActions.Action) {

    switch (action.type) {

        case todoActions.GET_TODOS_SUCCESS:
            return action.payload;

        case todoActions.DELETE_ITEM_SUCCESS:
            console.log("current state :", action.payload);
            return action.payload;

        case todoActions.ADD_ITEM_SUCCESS:
            

        default:
            return state;
    }

}