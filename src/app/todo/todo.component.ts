import { Component } from '@angular/core'; //deleted , OnInit
import { Todo } from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoList: Todo[] = [
    {
      task: "Laundry.",
      completed: false
    },
    {
      task: "Basket weaving.",
      completed: true
    },
    {
      task: "Get milk.",
      completed: false
    },
    {
      task: "Skydiving.",
      completed: true
    }
  ]

  constructor() { }


}
