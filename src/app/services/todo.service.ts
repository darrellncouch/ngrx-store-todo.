import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map";

// import { todoDB } from "../../db";
import { Store } from "@ngrx/store";


@Injectable()
export class TodoService {

    todoDB: ITodoItem[] = [
        {
            id: 1,
            isCompleted: false,
            task: "learn NGRX!"
        },
        {
            id: 2,
            isCompleted: false,
            task: "clean room"
        },
        {
            id: 3,
            isCompleted: false,
            task: "learn how to make friends"
        }   
    ];

  constructor() {};

    getTodos(): Observable<ITodoItem[]>{
        return of( this.todoDB );
    }

    deleteTodo(id: number): Observable<ITodoItem[]> {
        console.log("prev state :", this.todoDB);
        //Editing db file to mimick http delete
        this.todoDB.splice(this.todoDB.map(item => item.id).indexOf(id), 1)
        return of(this.todoDB);
    }

}

