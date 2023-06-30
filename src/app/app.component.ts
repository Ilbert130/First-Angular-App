import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Se refiere al html
  templateUrl: './app.component.html',

  // Se refiere al css
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Hola Mundo';

}
