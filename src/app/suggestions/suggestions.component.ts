import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  followingsArr:User[];
  suggestions:User[]; 
  userid:any;
  constructor(public userservice:UserService) { 
    this.userid= userservice.loginUser()._id;
  }

  ngOnInit(): void {
    this.userservice.Followings().subscribe(a=>{
      this.followingsArr = a;
    });
    this.userservice.getAll().subscribe(a=>{
      this.suggestions = a
    })
  }
  public isFollow: boolean = false;
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

  check(item : User){
    return !(this.followingsArr.some(user=>user.username === item.username))
  }

}
