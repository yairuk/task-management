import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs'

import { TaskDetailComponent } from './task-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  const mockActivatedRoute = { 
    params: of({ id: 5 }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
      ,
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
