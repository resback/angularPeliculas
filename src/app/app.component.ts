import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Soy cheems';
  fecha = new Date();

  peliculas = [
    {
      nombre: 'Iron Man',
      ranking: '10/10',
    },
    {
      nombre: 'Iron Man 2',
      ranking: '8/10',
    },
  ];
}
