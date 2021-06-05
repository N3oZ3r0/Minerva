import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  getlogin(){
    return(localStorage.getItem("login"));
  }
  setlogintrue(){
    localStorage.setItem("login", "true");
  }
  setloginfalse(){
    localStorage.setItem("login", "false");
  }
  constructor() {
  }

  ngOnInit(): void {
    localStorage.setItem("login", "false");
  }

}

