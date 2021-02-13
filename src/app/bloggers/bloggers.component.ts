import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.css']
})

export class BloggersComponent implements OnInit {
  @Input()user:string;
  name:string;
  blogerBlogs:  Blogs[];
  constructor(public blogsservice:BlogsService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(a=>this.name=a['item']);
    this.blogsservice.searchByAuthor(this.name).subscribe(a=>{
      this.blogerBlogs=a;
      console.log("bloger",a);
  })

}
 }
