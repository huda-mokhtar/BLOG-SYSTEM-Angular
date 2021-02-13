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
  blogerBlogs:  Blogs[];
  constructor(public blogsservice:BlogsService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    let name:string;
    this.ar.params.subscribe(a=>name=a['item'])
    this.blogsservice.searchByAuthor(name).subscribe(a=>{
      this.blogerBlogs=a;
      console.log("bloger",a);
  })

}
 }
