import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  loginUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
  searchResult:Blogs[];
  constructor(public http:HttpClient){
  }
  getAll(){
    return this.http.get<Blogs[]>("http://localhost:3000/blogs");
  } 
  createBlog(blog:any){
    console.log(blog);
    return this.http.post<Blogs>("http://localhost:3000/blogs/create",blog,{ headers: { authorization: this.loginUser().token } });
   }
   deleteBlog(id:any){
     return this.http.delete<Blogs>('http://localhost:3000/blogs/'+id ,{ headers: { authorization: this.loginUser().token } });
   }
   updateBlog(BlogId:any,blog:Blogs){
     return this.http.patch<Blogs>('http://localhost:3000/blogs/'+BlogId,blog,{ headers: { authorization: this.loginUser().token } });
   }
   followingsBlogs() {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/followings',{ headers: { authorization: this.loginUser().token } });
  }
  profile() {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/myprofile',{ headers: { authorization: this.loginUser().token } });
  }
  searchTageTitle(ser:string) {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/search/'+ser,{ headers: { authorization: this.loginUser().token } });
  }
  searchByAuthor(username:string) {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/author/'+username,{ headers: { authorization: this.loginUser().token } });
  }
  postComment(BlogId:string,comment:any){
    console.log("service",comment)
    return this.http.post<string>("http://localhost:3000/blogs/comments/"+BlogId,comment,{ headers: { authorization: this.loginUser().token } });
   }

   
}
