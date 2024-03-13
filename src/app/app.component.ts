import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Matheus'
  userData = {
    email: 'matheus@gmail.com',
    password: '0040154'
  }
  
  title = 'my-app';
}
