import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ITask, STATUSES } from '../task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @ViewChild(NgForm, { static: false }) taskForm: NgForm;

  statuses: STATUSES[] = [STATUSES.NOT_START, STATUSES.STARTED, STATUSES.COMPLETED, STATUSES.PAUSE];
  
  @Input() task: ITask;
  @Input() showDeleteBtn: boolean = false;
  @Output() clickOnSaveBtn: EventEmitter<any> = new EventEmitter();
  @Output() clickOnCancelBtn: EventEmitter<any> = new EventEmitter();
  @Output() clickOnDeleteBtn: EventEmitter<any> = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
    if (!this.task) {
        this._resetTask();
    }
  }

  saveForm(subTask: ITask) {
    this.clickOnSaveBtn.emit(subTask);
  }

  cancelForm() {
    this.clickOnCancelBtn.emit();
  }

  deleteTask() {
    this.clickOnDeleteBtn.emit();
  }

 private _resetTask() {
    this.task = {
      id: null,
      title: null,
      description: null,
      status: this.statuses[0],
      type: null,
      subs:[]
    };
  }
}
