import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/Todo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  public todoList: Array<Todo> = [
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
    setTimeout(() => {
      if(!this.todoList.length) {
        return observer.error('TodoList is empty');
      }
      observer.next(this.todoList);
      observer.complete()
    }, 3000);
  });


  constructor() { }

  getTasks(){
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
    return this.todoList
  }

  addTodoItem(todoForm: object): Array<object>{
    this.todoList.push(<Todo>todoForm);
    return this.todoList
  }

  saveTodo(id: number, text: string): Array<object>{
    for (let i: number = 0; i < this.todoList.length; i++){
      if (id === this.todoList[i].id){
        this.todoList[i].body = text;
      }
    }
    return this.todoList
  }

  completedTasks(): Array<Todo>{
    return this.todoList.filter( (task: Todo) => task.isCompleted === true);
  }

  notCompletedTask(): Array<Todo>{
    return this.todoList.filter( (task: Todo) => task.isCompleted === false);
  }
}
