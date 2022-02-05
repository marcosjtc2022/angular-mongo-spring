import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //Property bind que passa para o html 
  public texto:string = ""
  constructor() { }

  ngOnInit(): void {
    this.texto = "Olá tudo bem?"
  }

  clicou() {
  
     this.texto = "clicou"

  }

}
