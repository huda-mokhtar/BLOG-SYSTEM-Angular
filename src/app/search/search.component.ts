import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 blogs:Blogs[];
  search:string;
  constructor(public blogsservice:BlogsService,public ar:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.ar.params.subscribe(a=>this.search=a['search']);
    this.blogsservice.searchTageTitle(this.search).subscribe(a=>{
      this.blogs=a;
      console.log(this.search,this.blogs);
    })

}


  
}
