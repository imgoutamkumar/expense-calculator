import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-edit-add-item-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogContent,
  ],
  templateUrl: './edit-add-item-form.component.html',
  styleUrl: './edit-add-item-form.component.scss',
})
export class EditAddItemFormComponent implements OnInit {
  editAddItemForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditAddItemFormComponent>,
    private fb: FormBuilder
  ) {
    this.editAddItemForm = this.fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  @Output() updatedData = new EventEmitter<any>();

  ngOnInit(): void {
    this.editAddItemForm.patchValue(this.data);
  }

  submitEditAddItemForm() {
    this.dialogRef.close(this.editAddItemForm.value);
  }
}
