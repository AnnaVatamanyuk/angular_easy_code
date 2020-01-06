import { Component } from '@angular/core';
import {Todo} from "./interfaces/Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 todoList: Array<Todo> = [
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

  taskList: Array<Todo> = this.todoList;
  currentFilter: string = 'all';

  deleteTodoItem(id: number): void{
   this.todoList = this.todoList.filter((item: Todo) => item.id !== id);
   this.rebuildList();
 }

  completeTodoItem(id: number): void{
    this.todoList = this.todoList.map((item: Todo) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
    });
    this.rebuildList();
  }

  rebuildList(): void{
    switch (this.currentFilter) {
      case 'completed':
        this.CompletedTasksItems();
        break;
      case 'notCompleted':
        this.NotCompletedTask();
        break;
      default:
        this.AllTasks();
        break;
    }
  }

 onFormSubmit(todo): void{
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    };
    this.todoList.push(newTodo);
 }

 AllTasks(): void{
    this.currentFilter = 'all';
    this.taskList = this.todoList;
 }

 CompletedTasksItems(): void{
    this.currentFilter = 'completed';
    this.taskList = this.todoList.filter( (task: Todo) => task.isCompleted === true);
 }

 NotCompletedTask(): void{
    this.currentFilter = 'notCompleted';
    this.taskList = this.todoList.filter( (task: Todo) => task.isCompleted === false);
 }

}
