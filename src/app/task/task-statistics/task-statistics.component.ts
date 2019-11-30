import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-statistics',
  templateUrl: './task-statistics.component.html',
  styleUrls: ['./task-statistics.component.scss']
})
export class TaskStatisticsComponent implements OnInit, OnDestroy {

  chartData;
  getTasksListSubscription: Subscription
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    if (this._taskService.tasks && this._taskService.tasks.length) {
      this.chartData = this._taskService.getChartData();
    } else {
      this.getTasksListSubscription = this._taskService.getTasksList().subscribe(() => {
        this.chartData = this._taskService.getChartData();
      });
    }
  }

  ngOnDestroy() {
    if (this.getTasksListSubscription) {
      this.getTasksListSubscription.unsubscribe();
    }
  }
}
