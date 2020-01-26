import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Todo} from "../../interfaces/Todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent{
  @Input() item: Todo;
  @Input() textarea: string;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() completeEvent: EventEmitter<number> = new EventEmitter();
  @Output() editEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveEvent: EventEmitter<object> = new EventEmitter();


  condition: boolean = false;
  buttonText: string = 'Complete';
  buttonEditText: string = 'Edit';
  textTask: string;

  onTextareaChange(textTask: string){
    this.textarea = textTask;
  }

  deleteItem(): void{
    this.deleteEvent.emit(this.item.id);
  }

  completeItem(): void{
    this.buttonText = this.item.isCompleted ? 'Complete' : 'Completed';
    this.completeEvent.emit(this.item.id)
  }

  editItem(): void{
    this.condition = !this.condition ;
    this.buttonEditText = this.buttonEditText === 'Edit' ? 'Cancel' : 'Edit';
    this.editEvent.emit(this.item.id);
  }

  saveItem(): void{
    this.buttonEditText = 'Edit';
    this.condition = false;
    this.saveEvent.emit({id: this.item.id, text: this.textarea});
  }
}
