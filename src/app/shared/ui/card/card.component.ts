import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button';
import { MatDialog } from '@angular/material/dialog';
import { BigImageDialogComponent } from '../big-image-dialog/big-image-dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() btnTitle!: string;

  constructor(private _dialog: MatDialog) {}

  public openImage(image: string): void {
    this._dialog.open(BigImageDialogComponent, { data: image });
  }
}
