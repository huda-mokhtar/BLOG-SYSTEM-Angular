import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { FollowersComponent } from './followers/followers.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthorBlogsComponent } from './author-blogs/author-blogs.component';
import { FollowingsComponent } from './followings/followings.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< Updated upstream
import { SearchComponent } from './search/search.component';
=======
import { BloggersComponent } from './bloggers/bloggers.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    EditBlogComponent,
    NotFoundComponent,
    AboutComponent,
    FollowersComponent,
    TimelineComponent,
    AuthorBlogsComponent,
    FollowingsComponent,
    EditUserComponent,
<<<<<<< Updated upstream
    SearchComponent
=======
    BloggersComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
