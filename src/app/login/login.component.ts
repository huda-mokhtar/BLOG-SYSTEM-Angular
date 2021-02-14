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
  loggedUser : User= new User("","","","","","",0,[],[]);
  constructor(public userService : UserService , public router : Router) { 
  }

  ngOnInit(): void {
  }
  login(){
    this.userService.login(this.loggedUser).subscribe(
      a => {
        this.loggedUser = a ;
        localStorage.setItem('user',JSON.stringify(a));
        this.router.navigate(["/profile/timeline"]); 
       
      },
      err => {console.log(err); }
    );
   ;
  }
  
 

}
