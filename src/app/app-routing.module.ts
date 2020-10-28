import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{LoginComponent} from './auth/login/login.component';
import{RegisterComponent} from './auth/register/register.component';
import{CreatePostComponent} from './post/creat-post/create-post.component';
import{PostListComponent}  from './post/post-list/post-list.component'; 

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'create-post',component:CreatePostComponent},
  {path:'post-list',component:PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

