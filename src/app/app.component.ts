import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task/task.service';
import { CommonModule, NgFor } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  // private _taskService = Inject(TaskService);

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.listaTareas = this._taskService.getTasks();
  }

  agregarTarea() {
    console.log(this.nuevaTarea);
    this._taskService.setTask = this.nuevaTarea;
    this.listaTareas = this._taskService.getTasks();
  }

  eliminarTarea(index: number) {
    this._taskService.deleteTask(index);
    this.listaTareas = this._taskService.getTasks();
  }
}
