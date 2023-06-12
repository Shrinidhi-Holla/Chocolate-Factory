import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
ngOnInit() {
this.passwordtype=="password";
}

passwordtype: string="password";

showpassword(){
  this.passwordtype="text";
}
}
