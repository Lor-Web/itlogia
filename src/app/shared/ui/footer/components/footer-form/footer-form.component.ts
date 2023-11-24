import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NoDotInputDirective } from '../../utils';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    NoDotInputDirective,
  ],
  providers: [],
  templateUrl: './footer-form.component.html',
  styleUrl: './footer-form.component.scss',
})
export class FooterFormComponent {
  public footerFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    telephone: new FormControl(''),
  });
}
