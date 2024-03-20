import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: Number = 0;
  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }
}