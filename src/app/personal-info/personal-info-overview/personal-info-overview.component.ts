import { Component, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  // Address exercise: add `address: Address;` here once app-address exists,
  // then `apply(path.address, addressSchema)` below and mount the field in the template.
}

@Component({
  selector: 'app-personal-info-overview',
  standalone: true,
  imports: [FormField, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './personal-info-overview.component.html',
  styleUrl: './personal-info-overview.component.scss'
})
export class PersonalInfoOverviewComponent {
  model = signal<PersonalInfo>({ firstName: '', lastName: '' });

  personalInfoForm = form(this.model, (path) => {
    required(path.firstName, { message: 'First name is required' });
    required(path.lastName, { message: 'Last name is required' });
  });

  apply(): void {
    this.personalInfoForm().markAsTouched();
    if (this.personalInfoForm().valid()) {
      console.log(this.personalInfoForm().value());
    }
  }
}
