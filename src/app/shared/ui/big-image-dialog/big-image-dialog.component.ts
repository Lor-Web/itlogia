import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-big-image-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-image-dialog.component.html',
  styleUrl: './big-image-dialog.component.scss',
})
export class BigImageDialogComponent {
  constructor(
    public dialog: MatDialogRef<BigImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
