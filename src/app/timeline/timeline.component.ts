import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  blogs:Blogs[];
  bloger_blogs:Blogs[];
  constructor(public blogsservice:BlogsService) {
   }

  ngOnInit(): void {
    this.blogsservice.followingsBlogs().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
  }
  getProfile(user:string ){
    this.blogsservice.searchByAuthor(user).subscribe(a=>{
    this.bloger_blogs=a;
    console.log("bloger_blogs",a);
  })

  }

}
