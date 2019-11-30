import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ITask } from '../task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  showForm = false;
  taskParamsId: number = null;
  pageTitle: string = '';
  task: ITask = {
    id: null,
    title: null,
    description: null,
    status: null,
    type: null,
    subs: []
  };

  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.taskParamsId = +params.id;

      if (this.taskParamsId) {

        this._getTaskById(this.taskParamsId);
        this.pageTitle = 'Edit'
      } else {
        this.pageTitle = 'Create'
        this.task.id = Math.floor(Math.random() * 1000000) + 1;
      }
    })
  }

  navigateToTask(id: number): void {
    this._router.navigate(['task', id]);
  }

  getSubsTasksList(ids: number[]): ITask[] {
    return this._taskService.getSubsTasksList(ids);
  }

  saveForm(task: ITask): void {
    if (this.taskParamsId) {
      this._taskService.editTask(task);
    } else {
      this._taskService.addTask(task);
    }
    this._router.navigate(['tasks']);

  }

  addSubTask(subTask: ITask) {
    subTask.id = Math.floor(Math.random() * 1000000) + 1;
    this.task.subs.push(subTask.id);
    this._taskService.addTask(subTask, true);
    this.showForm = false;
  }

  openForm() {
    this.showForm = true;
  }

  deleteTask(id: number, isSubTask?: boolean): void {
    this._taskService.deleteTask(id, true, this.task);
    if (!isSubTask) {
      this._router.navigate(['tasks']);
    }
  }

  closeForm() {
    this.showForm = false;
  }

  cancelForm() {
    this._router.navigate(['tasks']);
  }

  private _getTaskById(id: number) {
    if (!this._taskService.tasks.length) {
      this._taskService.getTasksList();
    }
    this.task = Object.assign({}, this._taskService.getTaskById(id));
  }

}
