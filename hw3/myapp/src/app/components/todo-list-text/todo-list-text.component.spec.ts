import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTextComponent } from './todo-list-text.component';

describe('TodoListTextComponent', () => {
  let component: TodoListTextComponent;
  let fixture: ComponentFixture<TodoListTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
