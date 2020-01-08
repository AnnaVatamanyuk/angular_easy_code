import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../interfaces/Todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent{
  @Input() item: Todo;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() completeEvent: EventEmitter<number> = new EventEmitter();

  buttonText: string = 'Complete';

  DeleteItem(): void{
    this.deleteEvent.emit(this.item.id);
  }
  //
  // CompleteItem(): void{
  //
  // }

  CompleteItem(): void{
    this.buttonText = this.item.isCompleted ? 'Complete' : 'Completed';
    this.completeEvent.emit(this.item.id)
  }

}
