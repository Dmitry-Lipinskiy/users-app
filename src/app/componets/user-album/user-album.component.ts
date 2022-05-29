import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, IPhoto } from 'src/app/shared/model/user-app.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.scss']
})
export class UserAlbumComponent implements OnInit {

  @Input() album!: IAlbum;

  photos: IPhoto[] = [];
  isShowPhotos: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getPhotos() {
    this.isShowPhotos = !this.isShowPhotos;

    if (this.isShowPhotos) {
      this.userService.getPhotosByAlbumsId(this.album.id).subscribe((photos: IPhoto[]) => {
        this.photos = photos;
        // console.log(photos);
      })
    }
  }

}
