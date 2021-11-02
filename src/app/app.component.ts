import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Luis Adrian";
  profesion: string = "Software Dev";

  
  mostrarNombre(){
    console.log(this.nombre);
  }


}
