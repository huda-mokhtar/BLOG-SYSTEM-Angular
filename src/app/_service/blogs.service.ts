import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  loginUser:any;

  constructor(public http:HttpClient){
   this.loginUser=JSON.parse(localStorage.getItem('user'));
  }
  getAll(){
    return this.http.get<Blogs[]>("http://localhost:3000/blogs");
  } 
  createBlog(blog:Blogs){
    return this.http.post<Blogs>("http://localhost:3000/blogs/create",blog,{ headers: { authorization: this.loginUser.token } });
   }
   deleteBlog(id:number){
     return this.http.delete<Blogs>("http://localhost:3000/blogs/"+id,{ headers: { authorization: this.loginUser.token } });
   }
   updateBlog(id:number,blog:Blogs){
     return this.http.patch<Blogs>('http://localhost:3000/blogs/'+id,blog,{ headers: { authorization: this.loginUser.token } });
   }
   followingsBlogs() {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/followings',{ headers: { authorization: this.loginUser.token } });
  }
  profile() {
    return this.http.get<Blogs[]>('http://localhost:3000/blogs/myprofile',{ headers: { authorization: this.loginUser.token } });
  }


}
