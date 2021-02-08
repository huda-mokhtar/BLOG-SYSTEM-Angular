import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:User;

  constructor(public userservice:UserService ,  public ar:ActivatedRoute, public r:Router) 
  {
    this.user = userservice.loginUser;
  }
  update(){
    this.userservice.update(this.user).subscribe(
        d =>{
          console.log(this.user);
          this.r.navigateByUrl('/profile') ;
        }      
    )
  }

  ngOnInit(): void {

  }

}
