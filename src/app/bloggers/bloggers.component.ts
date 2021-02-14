import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.css']
})

export class BloggersComponent implements OnInit {
  @Input() user: string;
  name: string;
  blogerBlogs: Blogs[];
  blogs: Blogs[];


  comment: string;
  addForm: FormGroup;
  show: any;
  status: any;
  flag: boolean = false;

  constructor(public blogsservice: BlogsService, public ar: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ar.params.subscribe(a => this.name = a['item']);
    this.blogsservice.searchByAuthor(this.name).subscribe(a => {
      this.blogerBlogs = a;
      console.log("bloger", a);
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
