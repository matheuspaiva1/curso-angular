import { Component } from '@angular/core';
import {Animal} from '/Curso-Angular/my-app/src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {
animals: Animal[] = [
  {name: 'turca', type: 'Dog', age: 4},
  {name: 'Tom', type: 'Cat', age: 5},
  {name: 'frida', type: 'Dog', age: 8},
  {name: 'bob', type: 'Horse', age: 10},
];
  animal: Animal = { 
    name: 'teste',
    type: 'qualquer',
    age: 10,
  }
animalDetails = '';

showAge(animal: Animal) {
  this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
}
}
