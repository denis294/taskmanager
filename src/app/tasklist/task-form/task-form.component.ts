import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import {coerceNumberProperty} from '@angular/cdk/coercion';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskForm: FormGroup;
  datepost = Date.now();
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  


  constructor(private formBuilder: FormBuilder, private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: '',
      progression: ['', [Validators.required, Validators.max(100),  Validators.min(0)]],
    });
  }

  onSaveTask() {
    const title = this.taskForm.get('title').value;
    const content = this.taskForm.get('content').value;
    const progression = this.taskForm.get('progression').value;
    const date = this.datepost;
    const newTask = new Task(title, progression);
    newTask.content = content;
    newTask.progression = progression;
    newTask.date = date;
    if(this.fileUrl && this.fileUrl !== '') {
      newTask.photo = this.fileUrl;
    }
    this.tasksService.createNewTask(newTask);
    this.router.navigate(['/tasks']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.tasksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
