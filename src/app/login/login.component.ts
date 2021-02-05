import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser : User= new User("","","",[],[]) ;
  loginUser:any;
  constructor(public userService : UserService , public router : Router) { 
    this.loginUser=JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }
  login(){
    this.userService.login(this.loggedUser).subscribe(
      a => {
        console.log(a);
        this.loggedUser = a ;
        localStorage.setItem('user',JSON.stringify(a));
        
        this.router.navigate(['/home']);
      },
      err => {console.log(err); }
    );
  }

}
