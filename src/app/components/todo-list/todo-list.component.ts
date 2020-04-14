import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  addTo : string;
  todoList : any;
  todoObj : any;

  constructor() { 
    this.addTo = '';
    this.todoList = [];
  }

    addTodo(event){
      this.todoObj = {
        addTo: this.addTo,
        completed: false
      }

      this.todoList.push(this.todoObj);
      this.addTo = '';
      event.preventDefault();
    }
 

  ngOnInit() {
  }

}
