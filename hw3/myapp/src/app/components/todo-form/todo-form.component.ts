import { Component, ViewChild } from '@angular/core';
import {TodoServicesService} from "../../services/todo-services.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent{
  constructor(public todoServicesService: TodoServicesService) {
  }

  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: ''
  };

  onSubmit(): void{
    this.todoServicesService.addTodoItem({ ...this.todoForm });
    this.form.resetForm();
  }
}
