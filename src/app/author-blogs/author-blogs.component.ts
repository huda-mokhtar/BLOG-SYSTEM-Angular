import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-author-blogs',
  templateUrl: './author-blogs.component.html',
  styleUrls: ['./author-blogs.component.css']
})
export class AuthorBlogsComponent implements OnInit {
  blogs:Blogs[];
  constructor(public blogsservice:BlogsService) { }

  ngOnInit(): void {
    this.blogsservice.profile().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
  }

}
