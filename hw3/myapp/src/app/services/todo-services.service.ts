import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/Todo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  private todoList: Array<Todo> = [
    {
      id: 1,
      title: 'learn JavaScript',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: true,
    }
  ];

  private itemsObservable: Observable<Array<Todo>> = new Observable((observer) => {
      observer.next(this.todoList);
      observer.complete();
  });

  getTasks(): Observable<Array<Todo>>{
    return this.itemsObservable;
  }

  deleteTodoItem(id: number): boolean{
    const taskList = this.todoList;
    this.todoList = taskList.filter((item: Todo) => item.id !== id);
    return this.todoList.length !== taskList.length;
  }

  getCompleteTodoItem(id: number): Array<object>{
    this.todoList = this.todoList.map((item: Todo) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    return this.todoList;
  }

  addTodoItem(todoForm: Todo): Array<object>{
    this.todoList.push(todoForm);
    return this.todoList;
  }

  saveTodo(id: number, text: string): Array<object>{
    for (let i: number = 0; i < this.todoList.length; i++){
      if (id === this.todoList[i].id){
        this.todoList[i].body = text;
      }
    }
    return this.todoList;
  }

  completedTasks(): Array<Todo>{
    return this.todoList.filter( (task: Todo) => task.isCompleted === true);
  }

  notCompletedTask(): Array<Todo>{
    return this.todoList.filter( (task: Todo) => task.isCompleted === false);
  }
}
