import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "./interfaces/Todo";
import {TodoServicesService} from "./services/todo-services.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() textTask: string;

  constructor(private todoServicesService: TodoServicesService ) { }

  taskList: Array<Todo> = [];
  currentFilter: string = 'all';

  ngOnInit(){
    this.rebuildList();
  }

  deleteTodoItem(id: number): void{
    if (this.todoServicesService.deleteTodoItem(id)) {
      this.rebuildList();
    }
 }

  completeTodoItem(id: number): void {
    this.todoServicesService.getCompleteTodoItem(id);
    this.rebuildList();
  }

  rebuildList(): void{
    switch (this.currentFilter) {
      case 'completed':
        this.completedTasksItems();
        break;
      case 'notCompleted':
        this.notCompletedTaskItems();
        break;
      default:
        this.allTasks();
        break;
    }
  }

 onFormSubmit(todo: Todo): void {
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    };
    this.taskList.push(newTodo);
 }

 allTasks(): void{
    this.currentFilter = 'all';
    this.todoServicesService.getTasks()
      .subscribe(
        item => {
            this.taskList = item;
        },
        (err) => console.log(err),
        () => console.log('Completed')
      );

 }

 completedTasksItems(): void{
    this.currentFilter = 'completed';
    this.taskList = this.todoServicesService.completedTasks();
 }

 notCompletedTaskItems(): void{
    this.currentFilter = 'notCompleted';
    this.taskList = this.todoServicesService.notCompletedTask();
 }

}
