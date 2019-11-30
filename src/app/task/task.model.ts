export enum STATUSES {
    NOT_START = 'not-start',
    STARTED = 'started',
    COMPLETED = 'completed'
}

export interface IStatus {
    status: STATUSES;
    icon: string;
}

export enum TASK_TYPE {
    TASK = 'task',
    SUB_TASK = 'subTask'
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: STATUSES;
    type: TASK_TYPE;
    subs?: number[];
}

export const STATUSES_ICONS = {
    [STATUSES.NOT_START]:  'fas fa-battery-empty',
    [STATUSES.STARTED]:  'fas fa-battery-half',
    [STATUSES.COMPLETED]:  'fas fa-battery-full'

}
