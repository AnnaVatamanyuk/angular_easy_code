import {Component, Input} from '@angular/core';
import {Todo} from "./interfaces/Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() textTask;
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

  editTodoItem(id: number): void{

  }

  saveTodoItem(itemTask): void{
    for (let i: number = 0; i < this.taskList.length; i++){
      if (itemTask.id === this.taskList[i].id){
        this.taskList[i].body = itemTask.text;
      }
    }
  }

  rebuildList(): void{
    switch (this.currentFilter) {
      case 'completed':
        this.completedTasksItems();
        break;
      case 'notCompleted':
        this.notCompletedTask();
        break;
      default:
        this.allTasks();
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

 allTasks(): void{
    this.currentFilter = 'all';
    this.taskList = this.todoList;
 }

 completedTasksItems(): void{
    this.currentFilter = 'completed';
    this.taskList = this.todoList.filter( (task: Todo) => task.isCompleted === true);
 }

 notCompletedTask(): void{
    this.currentFilter = 'notCompleted';
    this.taskList = this.todoList.filter( (task: Todo) => task.isCompleted === false);
 }

}
