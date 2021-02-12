import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { from } from 'rxjs';

@Component({
  selector: 'app-author-blogs',
  templateUrl: './author-blogs.component.html',
  styleUrls: ['./author-blogs.component.css']
})
export class AuthorBlogsComponent implements OnInit {
  blogs:Blogs[];
  deletedBlog :Blogs;
  
  constructor(public blogsservice:BlogsService ,  public ar:ActivatedRoute, public route:Router , private modalService: NgbModal) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }



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
    if(window.confirm('Are sure you want to delete this item ?')){
    this.blogsservice.deleteBlog(id).subscribe(
      d=>
      {
        this.route.navigateByUrl('/profile/autherblogs');
      }
    )
    }
  }
}
