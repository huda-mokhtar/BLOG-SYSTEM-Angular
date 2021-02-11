import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {

  users:User[];
 userid:any;
 
  constructor(public userservice:UserService) { 
    this.userid= userservice.loginUser.id;
  }
  public isFollow: boolean = false;
  ngOnInit(): void {

    this.userservice.Followings().subscribe(a=>{
      this.users=a;
    })

  }
  onClick(id:any){
    this.isFollow = !this.isFollow;
    if(!this.isFollow){
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
