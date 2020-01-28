import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Todo} from "./interfaces/Todo";
import {TodoServicesService} from "./services/todo-services.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  @Input() textTask;

  constructor(public todoServicesService: TodoServicesService ) { }

  taskList: Array<Todo> = [];
  currentFilter: string = 'all';
  todoObservable$;

  ngOnInit(){
    this.rebuildList();
  }

  ngOnDestroy(): void {
    this.todoObservable$.unsubscribe();
  }

  deleteTodoItem(id: number): void{
    if (this.todoServicesService.deleteTodoItem(id)){
      this.rebuildList();
    }
 }

  completeTodoItem(id: number): void{
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

 onFormSubmit(todo): void{
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    };
   this.taskList.push(newTodo);
 }

 allTasks(): void{
    this.currentFilter = 'all';
    this.todoObservable$ = this.todoServicesService.getTasks().subscribe((item) =>{
      this.taskList = item;
   },
      (err) => console.log(err),
      () => console.log('Completed')
      );

 }

 completedTasksItems(): void{
    this.currentFilter = 'completed';
    this.taskList = this.todoServicesService.completedTasks();
    console.log(this.taskList)
 }

 notCompletedTaskItems(): void{
    this.currentFilter = 'notCompleted';
   this.taskList = this.todoServicesService.notCompletedTask();
   console.log(this.taskList)
 }

}
