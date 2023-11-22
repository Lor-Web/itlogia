import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarRoutes } from '../../types';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss',
})
export class HeaderBarComponent {
  public navBarRoutes: NavBarRoutes = [
    { name: 'Пиццы', route: [''] },
    { name: 'Напитки', route: [''] },
    { name: 'Доставка и оплата', route: [''] },
    { name: 'Контакты', route: [''] },
  ];
}
