import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thanks-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thanks-dialog.component.html',
  styleUrl: './thanks-dialog.component.scss',
})
export class ThanksDialogComponent {
  constructor(
    public dialog: MatDialogRef<ThanksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
