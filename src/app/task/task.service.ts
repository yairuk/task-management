import { Injectable } from '@angular/core';
import { TASKS } from './tasks.const';
import { ITask, TASK_TYPE, STATUSES } from './task.model';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: ITask[] = [];

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks: ITask[]) {
    this._tasks = tasks;
  }

  getTasksList(): Observable<ITask[]> {
    this._tasks = TASKS;
    return of(this._tasks).pipe(map(tasks => {
      return tasks.filter(task => task.type === TASK_TYPE.TASK);
    }));
  }

  getTaskById(id: number): ITask {
    const index = this._tasks.findIndex(task => task.id === id);
    return this._tasks[index];
  }

  getSubsTasksList(ids: number[]): ITask[] {
    const subsArray = [];
    ids.forEach(id => {
      subsArray.push(this._tasks.find(tsk => tsk.id === id));
    })
    return subsArray;
  }

  editTask(task: ITask): void {
    const tmpTask = this._tasks.find(tsk => tsk.id === task.id);
    tmpTask.type = task.type;
    tmpTask.title = task.title;
    tmpTask.status = task.status;
    tmpTask.description = task.description;
    tmpTask.subs = task.subs;
  }

  addTask(newTask: ITask, isSubTask?: boolean) {
    if (isSubTask) {
      newTask.type = TASK_TYPE.SUB_TASK;
    } else {
      newTask.type = TASK_TYPE.TASK;
    }
    this._tasks.push(newTask);
  }

  deleteTask(taskDeletedId: number, isSubTask?: boolean, parentTask?: ITask) {
    const index = this._tasks.findIndex(task => task.id === taskDeletedId);

    // remove sub task form task/subtask
    if (this._tasks[index].subs) {
      this._tasks[index].subs.forEach(inx => {
        this._tasks.splice(inx, 1);
      });
    }

    //remove the subtask from the parent task subs array
    if (isSubTask) {
      const parentIndex = this._tasks.findIndex(task => task.id === parentTask.id);

      const subIndex = this._tasks[parentIndex].subs.findIndex(id => id === taskDeletedId);
      this._tasks[parentIndex].subs.splice(subIndex, 1);
    }
    this._tasks.splice(index, 1);
  }

  getChartData() {
    let chartData = [];
    const tmpStatusObj = {
      started: 0,
      notStart: 0,
      completed: 0,
      pause: 0
    }

    this._tasks.filter(task => task.type === TASK_TYPE.TASK).forEach(task => {
      if (task.status === STATUSES.COMPLETED) {
        tmpStatusObj.completed++
      } else if (task.status === STATUSES.STARTED) {
        tmpStatusObj.started++
      } else if (task.status === STATUSES.PAUSE) {
        tmpStatusObj.pause++
      } else {
        tmpStatusObj.notStart++
      }
    });

    chartData = [
      {
        name: STATUSES.COMPLETED,
        value: tmpStatusObj.completed

      },
      {
        name: STATUSES.STARTED,
        value: tmpStatusObj.started
      },
      {
        name: STATUSES.PAUSE,
        value: tmpStatusObj.pause
      },
      {
        name: STATUSES.NOT_START,
        value: tmpStatusObj.notStart
      }]
    return chartData;
  }

}
