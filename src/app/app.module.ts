import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { SingleTaskComponent } from './tasklist/single-task/single-task.component';
import { TaskFormComponent } from './tasklist/task-form/task-form.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.service';
import { TasksService } from './services/tasks.service';
import { UserGuardService } from './services/user-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TaskChartComponent } from './task-chart/task-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasklistComponent,
    SingleTaskComponent,
    TaskFormComponent,
    HeaderComponent,
    TaskChartComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService, TasksService, UserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
