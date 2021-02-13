import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FollowersComponent } from './followers/followers.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthorBlogsComponent } from './author-blogs/author-blogs.component';
import { FollowingsComponent } from './followings/followings.component';
import { EditUserComponent } from './edit-user/edit-user.component'
// import { from } from 'rxjs';
import { SearchComponent } from './search/search.component';
import { BloggersComponent } from './bloggers/bloggers.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,children:[
    {path:'autherblogs',component:AuthorBlogsComponent},
    {path:'timeline',component:TimelineComponent},
    {path:'followings',component:FollowingsComponent},
    {path:'followers',component:FollowersComponent},
    {path:'search',component:SearchComponent},
  ]},
  {path:'editBlog',component:EditBlogComponent},
  {path:'about',component:AboutComponent},
  {path:'bloggers/:item',component:BloggersComponent},
  {path:"",component:HomeComponent},
  {path:"*",component:NotFoundComponent},
  {path:'editUser',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
