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
    console.log("local",this.loginUser.token);
    return this.http.get<Blogs[]>("https://blogsuser.herokuapp.com/blogs");
  } 
  createBlog(blog:Blogs){
    return this.http.post<Blogs>("https://blogsuser.herokuapp.com/blogs/create",blog,{ headers: { authorization: this.loginUser.token } });
   }
   deleteBlog(id:number){
     return this.http.delete<Blogs>("https://blogsuser.herokuapp.com/blogs/"+id,{ headers: { authorization: this.loginUser.token } });
   }
   updateBlog(id:number,blog:Blogs){
     return this.http.patch<Blogs>('https://blogsuser.herokuapp.com/blogs/'+id,blog,{ headers: { authorization: this.loginUser.token } });
   }
   followingsBlogs() {
    return this.http.get<Blogs[]>('https://blogsuser.herokuapp.com/blogs/followings',{ headers: { authorization: this.loginUser.token } });
  }
  profile() {
    return this.http.get<Blogs[]>(' https://blogsuser.herokuapp.com/blogs/myprofile',{ headers: { authorization: this.loginUser.token } });
  }


}
