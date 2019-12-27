import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitEvent.emit({ ...this.todoForm });
    this.form.resetForm()
  }
}
