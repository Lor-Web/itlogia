import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NoDotInputDirective } from '../../utils';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FooterForm, SendFooterForm } from '../../../../types';
import { FooterFormFacadeService } from '../../../../store/footer-form/footer-form-facade.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    NoDotInputDirective,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './footer-form.component.html',
  styleUrl: './footer-form.component.scss',
})
export class FooterFormComponent implements OnInit {
  public footerLoading$ = this._footerFormFacadeService.getSelectPenging$.pipe(
    map((value) => {
      if (value.sendFormLoading) {
        this.footerFormGroup.reset();
      }

      return value.sendFormLoading;
    })
  );
  public footerFormGroup = new FormGroup<FooterForm>({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    telephone: new FormControl('', [Validators.required]),
  });

  constructor(private _footerFormFacadeService: FooterFormFacadeService) {}

  ngOnInit(): void {}

  public sendForm(): void {
    const formData: SendFooterForm = {
      name: this.footerFormGroup.controls.address.value ?? '',
      address: this.footerFormGroup.controls.address.value ?? '',
      telephone: this.footerFormGroup.controls.address.value ?? '',
    };
    this._footerFormFacadeService.sendForm(formData);
  }
}
