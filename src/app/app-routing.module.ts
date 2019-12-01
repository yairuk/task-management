import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskStatisticsComponent } from './task/task-statistics/task-statistics.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    pathMatch: 'full'
  },
  {
    path: 'task/:id',
    component: TaskDetailComponent
  },
  {
    path: 'statistics',
    component: TaskStatisticsComponent
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
