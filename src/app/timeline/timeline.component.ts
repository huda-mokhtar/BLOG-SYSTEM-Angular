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
  
  constructor(public blogsservice:BlogsService, private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.blogsservice.followingsBlogs().subscribe(a=>{
      this.blogs=a;
      console.log(a);
    })
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
