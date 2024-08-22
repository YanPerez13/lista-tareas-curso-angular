import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private localStoreKey = 'listaTareas';

  getTasks(): string[] {
    return JSON.parse(localStorage.getItem(this.localStoreKey) as string) || [];
  }

  set setTask(tarea: string) {
    const tareas = this.getTasks();
    tareas.push(tarea);
    localStorage.setItem(this.localStoreKey, JSON.stringify(tareas));
  }

  deleteTask(index: number) {
    const tareas = this.getTasks();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStoreKey, JSON.stringify(tareas));
  }
}
