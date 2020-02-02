import { Component, ViewChild } from '@angular/core';
import {TodoServicesService} from "../../services/todo-services.service";
import { Todo } from 'src/app/interfaces/Todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent{
  constructor(private todoServicesService: TodoServicesService) {
  }

  @ViewChild('mainForm', {static: false}) form: NgForm;
  todoForm = {
    title: ''
  } as Todo;

  onSubmit(): void {
    this.todoServicesService.addTodoItem({ ...this.todoForm });
    this.form.resetForm();
  }
}
