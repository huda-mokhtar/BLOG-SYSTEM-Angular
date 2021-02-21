import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-author-blogs',
  templateUrl: './author-blogs.component.html',
  styleUrls: ['./author-blogs.component.css']
})
export class AuthorBlogsComponent implements OnInit {
  blogs:Blogs[];
  deletedBlog :Blogs;
  editedBlog :Blogs = new Blogs("","","",[],{});

  comment: string;
  addForm: FormGroup;
  show:any;
  status:any;
  flag:boolean = false;

  constructor(public blogsservice:BlogsService ,  public ar:ActivatedRoute, public route:Router , private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.blogsservice.profile().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    }) 
  }
  delete(id:any){
    if(window.confirm('Are sure you want to delete this blog ?')){
    this.blogsservice.deleteBlog(id).subscribe(
      d=>
      {
        this.route.navigateByUrl('/profile/autherblogs');
        location.reload();
      }
    )
    }
  }

  editBlog(index){
    this.editedBlog = this.blogs[index];
    console.log(this.editedBlog);
  }
  saveEditing(){
    this.blogsservice.updateBlog(this.editedBlog._id,this.editedBlog).subscribe(
      d =>{
        console.log(this.editedBlog);
        this.route.navigateByUrl('/profile/autherblogs') ;
       location.reload();
      }     

    )
  }

  showComments(e:any){
    console.log(e.target.parentNode.parentNode.nextSibling);
    this.show=e.target.parentNode.parentNode.nextSibling;
    this.status=e.target;
    this.flag = !this.flag
    if(this.flag){
      this.show.style.display = "block";
      this.status.innerText= "Hide Comments"
    }else{
      this.show.style.display = "none";
      this.status.innerText= "Show All Comments.."
    }
    
  }
  
  addComment(index){
    this.addForm = this.fb.group({
      body: [this.comment],
    });
  
    this.blogsservice.postComment(index,this.addForm.value).subscribe(a=>{
      console.log(a);
    });
    location.reload();
  }
  
}

