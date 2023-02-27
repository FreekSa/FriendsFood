import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = "";
  credentials: any = new Object({username: '', password: ''});
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login(credentials: any){
    if(credentials.username == 'Freek' && credentials.password == 'food'){
      this.router.navigate(['list']);
    } else {
      this.error = "Wrong credentials";
    }
  }
}
