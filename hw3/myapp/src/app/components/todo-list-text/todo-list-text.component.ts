import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-text',
  templateUrl: './todo-list-text.component.html',
  styleUrls: ['./todo-list-text.component.css']
})
export class TodoListTextComponent {
  @Input() textarea: string;
  @Output() textareaChange: EventEmitter<string> = new EventEmitter();

  onTextareaChange(value: string){
    this.textarea = value;
    this.textareaChange.emit(value);
  }
}
