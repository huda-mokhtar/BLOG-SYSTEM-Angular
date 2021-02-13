import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  blogs:Blogs[];
  blogerBlogs:Blogs[];
  username: string;
  
  constructor(public blogsservice:BlogsService) {
   }

  ngOnInit(): void {
    this.blogsservice.followingsBlogs().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
  }


}
