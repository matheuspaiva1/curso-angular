import { Component } from '@angular/core';
import {Animal} from '/Curso-Angular/my-app/src/app/Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {
animals: Animal[] = [];

animalDetails = '';

  constructor(private listService: ListService){
    this.getAnimals()
  }

showAge(animal: Animal) {
  this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
}
removeAnimal(animal: Animal) {
  console.log("removendo animal...")
  this.animals = this.animals.filter((a)=> animal.name !== a.name)
   this.listService.remove(animal.id).subscribe();
}

filtrarAnimal(animal:Animal){
  console.log("filtra animal")
  this.animals = this.listService.filtrar(this.animals, animal);
}
getAnimals(): void {
  this.listService.getAll().subscribe((animals) => (this.animals = animals));
}
}
