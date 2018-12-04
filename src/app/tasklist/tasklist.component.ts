import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit, OnDestroy {

  tasks: Task[];
  tasksSubscription: Subscription;
  color = 'warm';
  mode = 'determinate';
  bufferValue = 100;
  options = {};

  constructor(private tasksService: TasksService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    
    this.tasksSubscription = this.tasksService.tasksSubject.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
    this.tasksService.emitTasks();
    
  }


  onNewTask() {
    this.router.navigate(['/tasks', 'new']);
  }

  onDeleteTask(task: Task) {
    this.tasksService.removeTask(task);
  }

  onViewTask(id: number) {
    this.router.navigate(['/tasks', 'view', id]);
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }

}
