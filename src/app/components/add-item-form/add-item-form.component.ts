import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { title } from 'process';
@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss',
})
export class AddItemFormComponent {
  addItemForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addItemForm = this.fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  @Output() data = new EventEmitter<any>();

  submitAddItemForm() {
    this.data.emit(this.addItemForm.value);
    console.log(this.addItemForm.value);
  }
}
