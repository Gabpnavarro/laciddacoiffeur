import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-photos',
  templateUrl: './service-photos.component.html',
  styleUrls:
  [
    './service-photos.component.css',
    './service-photos.responsive.component.css'
  ]
})
export class ServicePhotosComponent implements OnInit {
  @Input()
  photoLeft:string= ""
  @Input()
  photoCenter:string= ""
  @Input()
  photoRight:string= ""

  @Input()
  titlePhotoLeft:string=""
  @Input()
  titlePhotoCenter:string=""
  @Input()
  titlePhotoRight:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
