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
  // @Output() blogevents: EventEmitter<Blogs[]> = new EventEmitter<Blogs[]>();
  
  constructor(public blogsservice:BlogsService) {
   }

  ngOnInit(): void {
    this.blogsservice.followingsBlogs().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
  }
  getProfile(user:string ){
    // console.log("aaaaaaaaaaaaaaaaaa");
    // this.blogsservice.searchByAuthor(user).subscribe(a=>{
    //   this.blogerBlogs=a;
    //   console.log("bloger_blogs",this.blogerBlogs);
      // this.blogevents.emit(a);
    // })
    // this.username=user;
  
  }

}
