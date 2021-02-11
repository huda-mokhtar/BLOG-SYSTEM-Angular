import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
 users:User[];
 userid:any;
 
  constructor(public userservice:UserService) { 
    this.userid= userservice.loginUser.id;
  }

  public isFollow: boolean = false;
 
  ngOnInit(): void {
     this.userservice.Followers().subscribe(a=>{
      this.users=a;
    }) 
  }
  onClick(id:any){
    this.isFollow = !this.isFollow;
    if(this.isFollow){
      this.userservice.follow(id).subscribe(
        user=>{
          console.log(id);
          console.log("i start following blablaa ");
        }
      )
    }else{
      this.userservice.unfollow(id).subscribe(
        user=>{
          console.log(id);
          console.log("i unfollow blablaa ");
        }
      )
    }
    
  }

  



}
