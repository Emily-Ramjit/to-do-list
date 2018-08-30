
import { Component } from '@angular/core';
import { userService } from '../../../services/userService'
import { OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: userService, private router: Router) { }
  users: any;
  name = '';
  isLoggedIn = false;
  currentUserId = '';

  onSubmit(f: NgForm) {
    console.log(f.form.value);
    this.checkUsers(f.form.value);
  }
  // onSubmit() { this.isLoggedIn = true }

  ngOnInit() {
  }

  checkUsers(name) {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);

        this.users.forEach(element => {
          if (element.name == name.name) {
            this.isLoggedIn = true;
             this.currentUserId = element.UserId;
            console.log(this.isLoggedIn + ' LOGGED IN')
            this.router.navigateByUrl('/home/'+ this.currentUserId)
          }
          else{
            console.log(this.isLoggedIn + ' creating user')
            this.userService.createUser(name).subscribe();
            this.router.navigateByUrl('/home/'+ this.currentUserId)
          }
        });
      });
  }
}
