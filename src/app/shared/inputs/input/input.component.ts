import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  class= input<string>();
  placeholder= input<string>('');
  error= input<string>();
  label = input<string>();
}
