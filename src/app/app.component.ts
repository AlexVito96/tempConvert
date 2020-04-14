import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  myName = 'Alex Vito';

  constructor(){
    console.log("Hello, I'm the constructor");

    // you do not need to define it
    var name = "Alex Vito";
    var age = 99;
    var found = false;
    var list = [];

    var future = 0;

    this.hello(this.title);
    this.hello(9);
  }

  hello(name){
    console.log(name);
  }

  something(){
    console.log("Btn clicked!");
    this.title = "This is awesome!!";
  }

}

