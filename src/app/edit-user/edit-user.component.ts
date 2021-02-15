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
     this.user = userservice.loginUser();
  }

  update(e){
    this.userservice.update(this.user).subscribe(a=>{
    console.log("update",this.user);
    this.login();
    this.r.navigateByUrl('/profile/timeline') ; 
    // e.target.setAttribute("href","/profile/timeline");
    });            
  }
login(){
  this.userservice.login(this.user).subscribe(
    a => {
      this.user = a ;
      localStorage.setItem('user',JSON.stringify(a));
    });
}
  ngOnInit(): void {

  }

}
