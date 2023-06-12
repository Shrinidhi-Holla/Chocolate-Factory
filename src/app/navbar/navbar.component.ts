import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loggedin:boolean=true;
  // public loggedout:boolean=false;


  Login() {
this.loggedin=false;
  }
  Logout() {
this.loggedin=true;
  }

  routeToLogin(){
    // Router.
  }
}
