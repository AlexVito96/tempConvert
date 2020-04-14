import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName = '';
  password = '';
  allUsers = [];
  loginError = false;


  constructor(private data: DataService, private router: Router, private shared: SharedService) {
    // get all users
    this.allUsers = data.userList;
  }

  login() {
    // travel the list of users
    // compare each user credentials with values from the form 
    var found = false;
    for (let i = 0; i < this.allUsers.length; i++) {
      var user = this.allUsers[i];
      if (user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password) {
        console.log("Login correct");
        found = true;
        this.loginError = false;

        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.userName;

        //send the user to register page
        this.router.navigate(['/user/register']);
      }
    }

    if (!found) {
      console.log("Wrong Login");
      this.loginError = true;
    }

  }
}
