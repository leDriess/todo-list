import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { MatDialog } from '@angular/material/dialog';

import { TasksService } from '../tasks.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../task';

@Component({
  selector: 'tasks-lists',
  templateUrl: './tasks-lists.component.html',
  styleUrls: ['./tasks-lists.component.scss'],
})
export class TasksListsComponent implements OnInit {
  taskTypes;
  tasks;
  sortMode = {
    date: 'asc',
    priority: 'desc',
  };

  constructor(private tasksService: TasksService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getAllTasks();
    this.taskTypes = Object.keys(this.tasks);
  }

  sortTask(type, key) {
    this.tasksService.sort(type, key, this.sortMode[key]);
    this.sortMode[key] = this.sortMode[key] === 'desc' ? 'asc' : 'desc';
  }

  getTasks(type) {
    this.tasksService.getTasksByType(type);
  }

  remove(index, type) {
    this.tasksService.removeTask(index, type);
  }

  edit(index, type) {
    const task = this.tasksService.getTasksByType(type)[index];
    const { name, status, description, date, priority } = task;

    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: {
        name: name,
        status: status,
        description: description,
        date: date,
        priority: priority,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { name, status, description, date, priority } = result;
        this.tasksService.editTask(
          index,
          type,
          new Task(name, status, description, date, priority)
        );
      }
    });
  }

  changeTaskStatus(container, index) {
    const { data, id } = container;
    const { name, description, date, priority } = data[index];
    const status = this.taskTypes[id.replace(/\D/g, '')];
    this.tasksService.editTask(
      index,
      status,
      new Task(name, status, description, date, priority)
    );
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.changeTaskStatus(event.container, event.currentIndex);
    }
  }
}
