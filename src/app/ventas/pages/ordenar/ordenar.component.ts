import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  isMayus: boolean = false;
  orderBy: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  heores: Heroe[] = [
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Thor Odin son',
      vuela: true,
      color: Color.amarillo,
    },
    {
      nombre: 'Loki',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Black Panther',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Black Widow',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Hawkeye',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Captain America',
      vuela: false,
      color: Color.azul,
    },
    {
      nombre: 'Winter Soldier',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Vision',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Scarlet Wich',
      vuela: true,
      color: Color.rojo,
    },
  ];


  changeIsMayus(){
    this.isMayus = !this.isMayus;
  }

  cambiarOrden(valor: string){
    this.orderBy = valor;
  }

}
