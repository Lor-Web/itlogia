import { FormControl } from '@angular/forms';

export interface FooterForm {
  name: FormControl<string | null>;
  address: FormControl<string | null>;
  telephone: FormControl<string | null>;
}

export interface SendFooterForm {
  name: string;
  address: string;
  telephone: string;
}
