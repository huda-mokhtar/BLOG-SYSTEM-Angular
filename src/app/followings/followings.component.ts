import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {

  followingsArr:User[];
  followersArr:User[];
 userid:any;
 
  constructor(public userservice:UserService) { 
    this.userid= userservice.loginUser.id;
  }
 public isFollow: boolean = false;
  ngOnInit(): void {

    this.userservice.Followings().subscribe(a=>{
      this.followingsArr=a;
    });
    this.userservice.Followers().subscribe(a=>{
      this.followersArr=a;
    })

  }
  onClick(e:any,id:any){
    console.log(e.target);
    /* e.target.style.backgroundColor = "green";
    e.target.innerText = "waffaf" */
  
 this.isFollow = !this.isFollow;
    if(!this.isFollow){
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
      );
      e.target.classList.remove("btn-danger");
      e.target.classList.add("btn-primary") ;
      e.target.innerText = "Follow"
    }
    
  }

}
