import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask, STATUSES_ICONS } from '../task.model';
@Component({
  selector: 'sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent implements OnInit {

  statusesIcon = STATUSES_ICONS;
  
  @Input() subTask: ITask;
  @Input() hideDeleteBtn: boolean;
  @Output() clickOnEditBtn: EventEmitter<any> = new EventEmitter();
  @Output() clickOnDeleteBtn: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  clickOnEdit(subTask: ITask) {
    this.clickOnEditBtn.emit({ subTask: subTask });
  }

  clickOnDelete(subTask: ITask) {
    this.clickOnDeleteBtn.emit({ subTask: subTask });
  }
}
