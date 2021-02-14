import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
 
  comment: string;
  addForm: FormGroup;
  show:any;
  status:any;
  flag:boolean = false;
  constructor(public blogsservice:BlogsService, private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.blogsservice.followingsBlogs().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
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
