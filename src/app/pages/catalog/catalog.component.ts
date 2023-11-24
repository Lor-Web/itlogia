import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../../shared/ui';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {}
