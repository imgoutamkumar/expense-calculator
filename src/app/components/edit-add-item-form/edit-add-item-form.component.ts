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
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonService } from '../../services/common.service';

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
    private fb: FormBuilder,
    private commonService: CommonService
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
    //this.updatedData.emit(this.editAddItemForm.value);
    //this.commonService.sendUpdateddData(this.editAddItemForm.value);
  }
}
