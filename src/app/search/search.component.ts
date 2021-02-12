import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../_service/blogs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Input() blogs:Blogs[];
  constructor(public blogsservice:BlogsService) { 
  }

  ngOnInit(): void {
   
}


  
}
