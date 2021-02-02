import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  register(user:User){
    return this.http.post<User>(" https://blogsuser.herokuapp.com/users",user);
  } 
}
