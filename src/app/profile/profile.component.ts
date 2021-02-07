import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   username: any ;
  constructor(public blogsservice:BlogsService , public router : Router) { 
     this.username= blogsservice.loginUser.username;
  }
  

  ngOnInit(): void {
   
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
