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
 followingsArr:User[];
 userid:any;
 followersArr:User[];
 
  constructor(public userservice:UserService) { 
    this.userid= userservice.loginUser.id;
  }

  public isFollow: boolean = false;
 
  ngOnInit(): void {
     this.userservice.Followers().subscribe(a=>{
      this.followingsArr=a;
    }) ;
    this.userservice.Followers().subscribe(a=>{
      this.followersArr=a;
    })
  }
  onClick(e:any,id:any){
    this.isFollow = !this.isFollow;
    if(this.isFollow){
      this.userservice.follow(id).subscribe(
        user=>{
          console.log(id);
          console.log("i start following blablaa ");
        }
      )
      e.target.classList.remove("btn-primary");
      e.target.classList.add("btn-danger") ;
      e.target.innerText = "Unfollow"
    }else{
      this.userservice.unfollow(id).subscribe(
        user=>{
          console.log(id);
          console.log("i unfollow blablaa ");
        }
      )
      e.target.classList.remove("btn-danger");
      e.target.classList.add("btn-primary") ;
      e.target.innerText = "Follow"
    }
    
  }

  



}
