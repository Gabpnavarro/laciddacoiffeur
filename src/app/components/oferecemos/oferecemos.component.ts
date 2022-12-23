  import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferecemos',
  templateUrl: './oferecemos.component.html',
  styleUrls: [
  './oferecemos.component.css',
  './oferecemos.responsive.component.css'
]
})
export class OferecemosComponent implements OnInit {

  @Input()
  title:string=""

  @Input()
  photoLeft:string=""
  @Input()
  titlePhotoLeft:string=""

  @Input()
  photoCenter:string=""
  @Input()
  titlePhotoCenter:string=""

  @Input()
  photoRight:string=""
  @Input()
  titlePhotoRight:string=""

  @Input()
  description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
