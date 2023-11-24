import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[noDotField]',
  standalone: true,
})
export class NoDotInputDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputValue: string = this.ngControl.value;

    // Заменяем точку на пустую строку
    const sanitizedValue: string = inputValue.replace('.', '');

    // Устанавливаем очищенное значение обратно в форму
    this.ngControl.control?.setValue(sanitizedValue);
  }
}
