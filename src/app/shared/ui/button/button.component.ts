import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatRippleModule, MatProgressSpinnerModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) title!: string;
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
}
