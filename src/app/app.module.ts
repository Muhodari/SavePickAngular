import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatButtonModule}   from '@angular/material/button';
import{MatToolbarModule}   from '@angular/material/toolbar'
import {MatCardModule}   from "@angular/material/card";
import{MatFormFieldModule}       from "@angular/material/form-field";
import{MatIconModule} from "@angular/material/icon";
import{FormsModule}       from"@angular/forms";
import{MatInputModule}  from'@angular/material/input';

import{ MatCarouselModule} from '@ngmodule/material-carousel'
import{LoginComponent} from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{RegisterComponent} from './auth/register/register.component';
import { CreatePostComponent } from './post/creat-post/create-post.component';
import{PostListComponent} from'./post/post-list/post-list.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
