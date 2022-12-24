import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salao-de-beleza',
  templateUrl: './salao-de-beleza.component.html',
  styleUrls:
  [
    './salao-de-beleza.component.css',
    './salao-de-beleza.responsive.component.css'
  ]
})
export class SalaoDeBelezaComponent implements OnInit {

  @Input()
  photoCover:string= ""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription= ""

  constructor() { }

  ngOnInit(): void {
  }

}
