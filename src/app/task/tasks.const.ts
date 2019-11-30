import { ITask, STATUSES, TASK_TYPE } from './task.model';
export const TASKS: ITask[] = [
    {
        id: 1,
        title: 'first task',
        description: 'do first task',
        status: STATUSES.STARTED,
        type: TASK_TYPE.TASK,
        subs: [6, 7]
    },
    {
        id: 2,
        title: 'second task',
        description: 'do second task',
        status: STATUSES.NOT_START,
        type: TASK_TYPE.TASK,
        subs: []
    },
    {
        id: 3,
        title: 'third task',
        description: 'do something',
        status: STATUSES.COMPLETED,
        type: TASK_TYPE.TASK,
        subs: []
    },
    {
        id:  4,
        title: 'task no 4',
        description: 'drive',
        status: STATUSES.STARTED,
        type: TASK_TYPE.TASK,
        subs: []
    },
    {
        id: 5,
        title: 'eat',
        description: 'eat something',
        status: STATUSES.STARTED,
        type: TASK_TYPE.TASK,
        subs: []
    },
    {
        id: 6,
        title: 'walk to there',
        description: 'walk and call',
        status: STATUSES.NOT_START,
        type: TASK_TYPE.SUB_TASK,
        subs: []
    },
    {
        id: 7,
        title: 'drive to work',
        description: 'drive and listen to music',
        status: STATUSES.NOT_START,
        type: TASK_TYPE.SUB_TASK,
        subs: [8, 9]
    },
    {
        id: 8,
        title: 'sing',
        description: 'sing a song',
        status: STATUSES.COMPLETED,
        type: TASK_TYPE.SUB_TASK,
        subs: []
    },
    {
        id: 9,
        title: 'watch a movie',
        description: 'eat popcoren',
        status: STATUSES.COMPLETED,
        type: TASK_TYPE.SUB_TASK,
        subs: []
    },
    {
        id: 10,
        title: 'pause task',
        description: 'dont do',
        status: STATUSES.PAUSE,
        type: TASK_TYPE.TASK,
        subs: []
    }

]