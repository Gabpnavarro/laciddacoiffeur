import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls:
  [
    './servicos.component.css',
    './servicos.responsive.component.css'
  ]
})
export class ServicosComponent implements OnInit {

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
