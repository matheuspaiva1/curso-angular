import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Matheus'
  age: number = 19
  cpf: number = 6263235253
  endereco: string = 'rua ze joaquim'
  job = 'Programador'
  hobbies = ['correr', 'jogar', 'estudar']
  carro = {
    name: 'polo',
    ano: 2018,
  }

}
