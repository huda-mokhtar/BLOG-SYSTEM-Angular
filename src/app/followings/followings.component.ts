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

  ngOnInit(): void {

    this.userservice.Followings().subscribe(a=>{
      this.users=a;
    })

  }

}
