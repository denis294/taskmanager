import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs/Subscription';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.scss']
})
export class TaskChartComponent implements OnInit {

  tasks: Task[] = [];
  postSubscription: Subscription;
  ischart = false;

  chartOptions = {
    responsive: true
  };
  chartData = [];
  chartLabels = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.postSubscription = this.tasksService.tasksSubject.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
    this.tasksService.emitTasks();
    this.initchart();
  }

  initchart(){
    const data1 = [];    
      var i = 0;
      this.tasks.forEach(element => {
        data1.push(this.tasks[i].progression);
        this.chartLabels.push(this.tasks[i].title);
        i++;
      });
      this.chartData.push({ data: data1, label: 'Progression' });
      this.ischart = true;
  }

}
