import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

type Offers = { title: string; description: string; image: string }[];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() title!: string;
  @Input() titleOrange?: string;

  offers: Offers = [
    {
      title: 'Лучшее тесто',
      description:
        'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
      image: 'hop',
    },
    {
      title: 'лучшие повара',
      description: 'Пиццы готовят самые профессиональные  итальянские повара',
      image: 'kitchen-pack',
    },
    {
      title: 'гарантия качества',
      description:
        'Наша пиццерия получила множество наград и признаний по всему миру',
      image: 'seo-and-web',
    },
    {
      title: 'отборные рецепты',
      description:
        'Мы используем рецепты от мировых лидеров в изготовлении пиццы',
      image: 'holidays',
    },
  ];
}
