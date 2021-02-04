import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../_service/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService : UserService , public router : Router) { }
  newUser: User =new User("","","",[],[]);
  ngOnInit(): void {
  }
  registerUser(){
    this.userService.register(this.newUser).subscribe(
      a=>this.router.navigate(['/home'])
    )
  }

}
