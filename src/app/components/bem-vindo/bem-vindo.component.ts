import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls:
[
  './bem-vindo.component.css',
  './bem-vindo.responsive.component.css'
]
})
export class BemVindoComponent implements OnInit {

  @Input()
  cardTitle:string=""
  @Input()
  cardDescription1:string=""
  @Input()
  cardDescription2:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
