import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public http:HttpClient){}
  getAll(){
    return this.http.get<Blogs[]>("https://blogsuser.herokuapp.com/blogs");
  } 
}
