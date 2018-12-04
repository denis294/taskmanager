import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmanager';
  constructor() {
   var config = {
    apiKey: "AIzaSyDe_wB8KkHTkDPLcl1Jldic8_ylKcaKkgM",
    authDomain: "taskmanager-60697.firebaseapp.com",
    databaseURL: "https://taskmanager-60697.firebaseio.com",
    projectId: "taskmanager-60697",
    storageBucket: "taskmanager-60697.appspot.com",
    messagingSenderId: "40348405648"
  };
  firebase.initializeApp(config);
  }



}
