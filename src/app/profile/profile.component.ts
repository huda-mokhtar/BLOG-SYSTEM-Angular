import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  search:string;
  username: any;
  selectedFile: File;
  addForm: FormGroup;
  newblog= new FormData();
  blog:Blogs=new Blogs("","","",[],{});
  constructor(public blogsservice: BlogsService, public router: Router, private fb: FormBuilder) {
    this.username = blogsservice.loginUser.username;
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
    });
  }


  ngOnInit(): void {

  }
  onFileSelect(event) {
    this.selectedFile = <File>event.target.files[0];
    this.newblog.append('photo', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  post() {
    this.newblog.append('title',this.blog.title);
    this.newblog.append('body', this.blog.body);
    this.blogsservice.createBlog(this.newblog).subscribe(a=>{
    console.log(a);
    this.router.navigate(['/profile/autherblogs']);
    })
  }
  onKey(){
    console.log(this.search);
    this.router.navigate(['/profile/search']);
  }
}