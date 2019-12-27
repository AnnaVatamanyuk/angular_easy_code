import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../interfaces/Todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input() item: Todo;
@Output() deleteEvent = new EventEmitter();


 buttonText: string = 'Complete';
  constructor() { }

  ngOnInit() {
  }

  DeleteItem(){
    this.deleteEvent.emit(this.item.id)
  }

  CompleteItem(){
    this.buttonText = this.item.isCompleted ? 'Complete' : 'Completed';
    this.item.isCompleted = !this.item.isCompleted;
  }
}
