import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser:any;
  constructor(public http:HttpClient) {
    this.loginUser=JSON.parse(localStorage.getItem('user'));
   }
  register(user:User){
    return this.http.post<User>(" https://blogsuser.herokuapp.com/users",user);
  } 
  login(user:User){
    return this.http.post<User>("https://blogsuser.herokuapp.com/users/login",user);
  }
  follow(id: number) {
    return this.http.post('https://blogsuser.herokuapp.com/users/follow/' + id,{},{ headers: { authorization: this.loginUser.token } });
  }
  unfollow(id: number) {
    return this.http.post('https://blogsuser.herokuapp.com/users/unfollow/' + id, {},{ headers: { authorization: this.loginUser.token } });
  }
  Followers(id: number) {
    return this.http.get<User[]>('https://blogsuser.herokuapp.com/users/followers/' + id,{ headers: { authorization: this.loginUser.token } } );
  }
  Followings(id: number) {
    return this.http.get<User[]>('https://blogsuser.herokuapp.com/users/followings/' + id,{ headers: { authorization: this.loginUser.token } } );
  }
  update(id: number,user:User){
    return this.http.patch<User>('https://blogsuser.herokuapp.com/users/' + id ,user,{ headers: { authorization: this.loginUser.token } });
  }
}
