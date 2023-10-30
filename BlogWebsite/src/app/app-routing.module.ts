import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: "create", component: CreateBlogComponent },
  { path: "signUp", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "blogs", component: BlogsComponent },
  { path: 'blogPage/:id', component: BlogPageComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
