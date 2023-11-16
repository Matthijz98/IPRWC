import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {

}
