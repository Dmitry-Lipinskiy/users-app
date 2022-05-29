import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './componets/user-item/user-item.component';
import { UserInfoComponent } from './componets/user-info/user-info.component';
import { UserPostComponent } from './componets/user-post/user-post.component';
import { PostCommentsComponent } from './componets/post-comments/post-comments.component';
import { UserTodoComponent } from './componets/user-todo/user-todo.component';
import { UserAlbumComponent } from './componets/user-album/user-album.component';
import { AlbumPhotosComponent } from './componets/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    PostCommentsComponent,
    UserTodoComponent,
    UserAlbumComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
