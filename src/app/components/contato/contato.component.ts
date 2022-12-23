import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: [
    './contato.component.css',
    './contato.component.responsive.css'
  ]
})
export class ContatoComponent implements OnInit {

  @Input()
  cardTitle:string = ""
 @Input()
  cardNumber:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
