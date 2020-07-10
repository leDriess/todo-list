import { Injectable } from '@angular/core';

import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = {
    todo: [
      new Task('Get to work', undefined, '', new Date(2020, 7, 30)),
      new Task('Pick up groceries', undefined, '', new Date(2020, 7, 25)),
      new Task('Go home', undefined, '', null),
      new Task('Fall asleep', undefined, '', new Date(2020, 7, 3)),
    ],
    inprogress: [
      new Task('Take a shower'),
      new Task('Check e-mail'),
      new Task('Walk dog'),
    ],
    done: [new Task('Get up'), new Task('Brush teeth')],
  };

  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  getTasksByType(type) {
    return this.tasks[type];
  }

  addTask(task, type = 'todo') {
    this.tasks[type].push(task);
  }

  removeTask(index, type) {
    this.tasks[type].splice(index, 1);
  }

  editTask(index, type, task) {
    if (type == task.status) {
      this.tasks[type].splice(index, 1, task);
    } else {
      this.removeTask(index, type);
      this.addTask(task, task.status);
    }
  }

  sort(type, key, order = 'asc') {
    if (key === 'date') {
      this.tasks[type].sort((a, b) =>
        order === 'asc' && a.date ? a.date - b.date : b.date - a.date
      );
    } else if (key === 'priority') {
      const priorityValues = {
        low: 0,
        medium: 1,
        high: 2,
      };
      this.tasks[type].sort((a, b) =>
        order === 'asc'
          ? priorityValues[a.priority] - priorityValues[b.priority]
          : priorityValues[b.priority] - priorityValues[a.priority]
      );
    }
  }
}
