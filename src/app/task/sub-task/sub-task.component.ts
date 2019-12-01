import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask, STATUSES_ICONS } from '../task.model';

@Component({
  selector: 'sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent {

  statusesIcon = STATUSES_ICONS;
  
  @Input() subTask: ITask;
  @Input() hideDeleteBtn: boolean;
  @Output() clickOnEditBtn: EventEmitter<any> = new EventEmitter();
  @Output() clickOnDeleteBtn: EventEmitter<any> = new EventEmitter();

  clickOnEdit(subTask: ITask) {
    this.clickOnEditBtn.emit({ subTask: subTask });
  }

  clickOnDelete(subTask: ITask) {
    this.clickOnDeleteBtn.emit({ subTask: subTask });
  }
}
