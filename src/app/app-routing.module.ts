import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { SingleTaskComponent } from './tasklist/single-task/single-task.component';
import { TaskFormComponent } from './tasklist/task-form/task-form.component';
import { UserGuardService } from './services/user-guard.service';
import { TaskChartComponent } from './task-chart/task-chart.component';

const routes: Routes = [
  { path: 'user/signup', component: SignupComponent },
  { path: 'user/signin', component: SigninComponent },
  { path: 'tasks', component: TasklistComponent },
  { path: 'tasks-chart', component: TaskChartComponent },
  { path: 'tasks/new', canActivate: [UserGuardService], component: TaskFormComponent },
  { path: 'tasks/view/:id', component: SingleTaskComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', redirectTo: 'tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
