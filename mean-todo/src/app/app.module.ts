import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FocusModule } from 'angular2-focus';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FocusModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'posts',
          pathMatch: 'full'
        },
        {
          path: 'posts',
          component: PostsComponent
        }
    ])
  ],
  providers: [ PostService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
