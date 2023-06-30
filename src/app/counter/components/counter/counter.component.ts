import { Component, OnInit } from '@angular/core';

@Component({
  // La etiquete que se crea cuando creas un componente
  selector: 'app-counter',
  template: `

      <h3>Counter: {{counter}}</h3>

      <!-- Evento del boton -->
      <!-- Asi colocamos un metodo -->
      <button (click)="increaseBy(2)">+1</button>
      <button (click)="reset(10)">Reset</button>
      <button (click)="decreaseBy(1)">-1</button>

  `
})

export class CounterComponent{
  constructor() { }

  public counter: number = 10;


  increaseBy(value:number):void {
    this.counter += value;
  }

  decreaseBy(value:number):void {
    this.counter -=value;
  }

  reset(value:number):void {
    this.counter = value;
  }

}
