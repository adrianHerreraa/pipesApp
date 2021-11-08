import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  lowerName: string = "luis adrian";
  upperName: string = "PINEDA HERREREA";
  fullName: string = "LuIs aDrIaN PiNedA HeRrEra";

  fecha: Date = new Date();


}
