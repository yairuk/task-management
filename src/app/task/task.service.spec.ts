import { TestBed } from '@angular/core/testing';
import { STATUSES, TASK_TYPE } from './task.model';
import { TASKS } from './tasks.const';

const exampleTask = {
  id: 2,
  title: 'second task',
  description: 'do second task',
  status: STATUSES.NOT_START,
  type: TASK_TYPE.TASK,
  subs: []
}

const exampleSubTask = {
  id: 6,
  title: 'walk to there',
  description: 'walk and call',
  status: STATUSES.NOT_START,
  type: TASK_TYPE.SUB_TASK,
  subs: []
}
let service: TaskService;

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({

  }));

  beforeEach(() => {
    service = TestBed.get(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTasksList', (done) => {
    service.getTasksList().subscribe(res => {
      expect(res).toContain(exampleTask);
    })
    done();
  });

  it('getTaskById', () => {
    service.tasks = TASKS;
    expect(service.getTaskById(2)).toEqual(exampleTask);
  });

  it('getSubsTasksList', () => {
    service.tasks = TASKS;
    expect(service.getSubsTasksList([6])).toEqual([exampleSubTask]);
  });

  it('addTask', () => {
    service.tasks = TASKS;
    const newTask = {
      id: 33333,
      title: 'new task',
      description: 'do second task',
      status: STATUSES.NOT_START,
      type: TASK_TYPE.TASK,
      subs: []
    }
    service.addTask(newTask);
    expect(service.tasks).toContain(newTask);
  });


});
