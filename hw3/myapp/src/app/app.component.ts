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
     title: 'lern JavaScript',
     isCompleted: false,
   },
   {
     id: 2,
     title: 'Learn Angular',
     isCompleted: true,
   }
 ];

  taskList: Array<Todo> = this.todoList;

    deleteTodoItem(id){
   this.todoList =this.todoList.filter(item => item.id !== id);
 }

 onFormSubmit(todo){
   const newTodo: Todo = {
     ...todo,
     isCompleted: false,
     id: Math.random()
   };
   this.todoList.push(newTodo)
 }

 AllTasks(){
      this.taskList = this.todoList
 }

 CompletedTasksItems(){
    this.taskList = this.todoList.filter( task => task.isCompleted === true);
 }

 NotCompletedTask(){
   this.taskList = this.todoList.filter( task => task.isCompleted === false);
 }

}
