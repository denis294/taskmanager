import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {

  task: Task;
  color = 'warm';
  mode = 'determinate';
  bufferValue = 100;

  constructor(private route: ActivatedRoute, private tasksService: TasksService,private router: Router) { }

  ngOnInit() {
    this.task = new Task('', 0);
    const id = this.route.snapshot.params['id'];
    this.tasksService.getSingleTask(+id).then(
      (task: Task) => {
        this.task = task;
      }
    );
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }


}
