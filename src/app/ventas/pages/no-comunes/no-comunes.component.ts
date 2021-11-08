import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // i18nSelect
  nombre: string = 'Luis Adrian';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Nombre', 'Pablo', 'José', 'Santiago'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarPersona(){
    if(this.genero == 'femenino'){
      this.genero = 'masculino';
      this.nombre = 'Adrian Herrera';
    }else if (this.genero == 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Lizeth Anahí';
    }
  }

  borrarCliente(){
    if(this.clientes.length > 0){
      this.clientes.pop();
    }
  }

  agregarCliente(){
    this.clientes.push('Nombre');
  }

  // Key Value pipe.
  persona = {
    name: 'Adrian Herrera',
    age: 25,
    direction: 'Morelia, Mich.'
  };

  // Json pipe
  heroes = [
    {
      name: 'Superman',
      canFly: true,
    },
    {
      name: 'Robin',
      canFly: false,
    },
    {
      name: 'Batman',
      canFly: false,
    },
    {
      name: 'Wonderwoman',
      canFly: true,
    }
  ];

  // Async pipe

  /// Mediante un observable.
  miObservable = interval(5000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa!, tenemos data!.');
    }, 3500);
  });


}
