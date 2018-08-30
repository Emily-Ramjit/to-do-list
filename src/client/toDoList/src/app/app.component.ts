import { Component } from '@angular/core';
import { userService } from '../../services/userService'
import { OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(){
  }
}


