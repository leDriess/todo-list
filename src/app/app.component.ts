import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { MatDialog } from '@angular/material/dialog';

import { TaskDialogComponent } from '../app/task-dialog/task-dialog.component';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  constructor(private taskService: TasksService, public dialog: MatDialog) {}

  addTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: {
        name: '',
        status: 'todo',
        description: '',
        date: null,
        priority: 'medium',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`result app.component`);
        console.log(result);
        const { name, status, description, date, priority } = result;
        // const tmp = [name, status, description, date, priority];
        // tmp.map((item) => {
        //   console.log(item);
        // });
        // this.add(name, status, description, date, priority);
        this.taskService.addTask(
          new Task(name, status, description, date, priority),
          status
        );
      }
    });
  }

  show() {
    console.log(this.taskService.getAllTasks());
  }
}
