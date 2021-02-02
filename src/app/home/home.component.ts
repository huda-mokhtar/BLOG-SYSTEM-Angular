import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs:Blogs[];
constructor(public blogsservice:BlogsService){}
  

  ngOnInit(): void {
    this.blogsservice.getAll().subscribe(a=>{
      this.blogs=a;
    console.log(a);})
  }

}
