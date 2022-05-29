import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {

  @Input() photo!: IPhoto;

  constructor() { }

  ngOnInit(): void {
  }

}
