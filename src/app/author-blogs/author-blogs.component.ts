import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-blogs',
  templateUrl: './author-blogs.component.html',
  styleUrls: ['./author-blogs.component.css']
})
export class AuthorBlogsComponent implements OnInit {
  blogs:Blogs[];
  deletedBlog :Blogs;
  
  constructor(public blogsservice:BlogsService ,  public ar:ActivatedRoute, public r:Router) { }

  ngOnInit(): void {
     this.blogsservice.profile().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    /* this.ar.params.subscribe(a=> {
      this.id=a['_id'];
      console.log(this.id);
    }) */
    }) 
  }
  delete(id:any){
    this.blogsservice.deleteBlog(id).subscribe(
      d=>
      {
        this.r.navigateByUrl('/profile/autherblogs');
        console.log(id);
      }
    )
  }

}
