import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent{
  @Output() submitEvent: EventEmitter<Todo> = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form: NgForm;
  todoForm = {
    title: ''
  } as Todo;

  onSubmit(): void{
    this.submitEvent.emit({ ...this.todoForm });
    this.form.resetForm();
  }
}
