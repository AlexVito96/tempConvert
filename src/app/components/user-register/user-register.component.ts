import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model = new User();
  reTypePass= '';
  alertVisible = false;

  constructor( private data: DataService ) { }

  ngOnInit() {
  }

  isDataCorrect(){
    return this.model.userName && this.model.email && this.model.password && this.model.password == this.reTypePass;
  }

  save(){
    this.data.saveUser(this.model);

    // clear the form
    this.model = new User(); //reinitiallize the obj memory
    this.reTypePass = '';
    
    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);

  }

}
