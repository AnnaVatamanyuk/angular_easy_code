import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-filters',
  templateUrl: './todo-list-filters.component.html',
  styleUrls: ['./todo-list-filters.component.css']
})
export class TodoListFiltersComponent implements OnInit {
  @Output() filterByCompleted = new EventEmitter();
  @Output() filterByNotCompleted = new EventEmitter();
  @Output() filterByAllTasks = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  AllTasks(){
    this.filterByAllTasks.emit();
  }

  NotCompletedTasks(){
    this.filterByNotCompleted.emit();
  }

  CompletedTasks(){
    this.filterByCompleted.emit()
  }

}
