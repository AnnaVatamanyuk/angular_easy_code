import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-filters',
  templateUrl: './todo-list-filters.component.html',
  styleUrls: ['./todo-list-filters.component.css']
})
export class TodoListFiltersComponent{
  @Output() filterByCompleted: EventEmitter<null> = new EventEmitter();
  @Output() filterByNotCompleted: EventEmitter<null> = new EventEmitter();
  @Output() filterByAllTasks: EventEmitter<null> = new EventEmitter();

  AllTasks(): void{
    this.filterByAllTasks.emit();
  }

  NotCompletedTasks(): void{
    this.filterByNotCompleted.emit();
  }

  CompletedTasks(): void{
    this.filterByCompleted.emit();
  }

}
