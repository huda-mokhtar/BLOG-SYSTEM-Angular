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
  login(e:any){
    console.log(e.target);
    this.userService.login(this.loggedUser).subscribe(
      a => {
        this.loggedUser = a ;
        localStorage.setItem('user',JSON.stringify(a));
        //  this.router.navigate(["/profile/timeline"]); 
        /* e.target.setAttribute("href", "http://localhost:3000/blogs/myprofile"); */
         e.target.setAttribute("href", "/profile/timeline");
      },
      err => {console.log(err); }
    );
   ;
  }
  
 

}
