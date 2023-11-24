import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInfoComponent } from './components/footer-info/footer-info.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterInfoComponent, FooterFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
