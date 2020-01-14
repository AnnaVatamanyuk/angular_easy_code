import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  @Output() editEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveEvent: EventEmitter<object> = new EventEmitter();

  condition: boolean = false;
  buttonText: string = 'Complete';
  buttonEditText: string = 'Edit';
  textTask: string;

  DeleteItem(): void{
    this.deleteEvent.emit(this.item.id);
  }

  CompleteItem(): void{
    this.buttonText = this.item.isCompleted ? 'Complete' : 'Completed';
    this.completeEvent.emit(this.item.id)
  }

  EditItem(): void{
    if( this.buttonEditText === 'Edit'){
      this.buttonEditText = 'Cancel';
      this.condition = !this.condition;
    }else {
      this.buttonEditText = 'Edit';
      this.condition = false;
    }
    this.editEvent.emit(this.item.id);
  }

  SaveItem(): void{
    this.buttonEditText = 'Edit';
    this.condition = false;
    this.saveEvent.emit({id: this.item.id, text: this.textTask});
  }
}
