import { taskStatus, taskPriority } from './types';

export class Task {
  constructor(
    public name: string,
    public status: taskStatus = 'todo',
    public description: string = '',
    public date: Date = null,
    public priority: taskPriority = 'medium'
  ) {}
}
