import { Component, OnInit } from '@angular/core';
import { ITask, STATUSES_ICONS } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasksList$: Observable<ITask[]>;
  statusesIcon = STATUSES_ICONS;

  constructor(private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
    this.tasksList$ = this._taskService.getTasksList();
  }

  navigateToTask(id: number): void {
    this._router.navigate(['task', id]);
  }

  getSubsTasksList(ids: number[]): ITask[] {
    return this._taskService.getSubsTasksList(ids);
  }

}
