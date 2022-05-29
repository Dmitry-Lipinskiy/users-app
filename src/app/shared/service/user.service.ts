import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAlbum, IComment, IPhoto, IPost, ITodo, IUser } from '../model/user-app.model';
import { Observable } from 'rxjs';

const URL_API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${URL_API}/users`);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${URL_API}/users/${id}`);
  }

  getPostsById(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${URL_API}/users/${id}/posts`);
  }

  getCommentsByPostId(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${URL_API}/posts/${id}/comments`);
  }

  getTodosByUserId(id: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${URL_API}/users/${id}/todos`);
  }

  getAlbumsByUserId(id: number): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(`${URL_API}/users/${id}/albums`);
  }

  getPhotosByAlbumsId(id: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`${URL_API}/albums/${id}/photos`)
  }

}
