import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatRadioModule, MatSliderModule, MatCardModule, MatProgressBarModule, MatSidenavModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatRadioModule, MatSliderModule, MatCardModule, MatProgressBarModule, MatSidenavModule, MatMenuModule],
})
export class MaterialModule { }