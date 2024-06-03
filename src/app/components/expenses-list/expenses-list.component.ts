import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditAddItemFormComponent } from '../edit-add-item-form/edit-add-item-form.component';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.scss',
})
export class ExpensesListComponent {
  constructor(public dialogBox: MatDialog) {}
  @Input() budgetItems = Array<any>();
  @Output() close = new EventEmitter<any>();
  @Output() updatedData = new EventEmitter<any>();

  closeButtonClicked(item: any) {
    this.close.emit(item);
  }

  openEditAddItemForm(data: any) {
    const dialogRef = this.dialogBox.open(EditAddItemFormComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (result: any) => {
        this.budgetItems[this.budgetItems.indexOf(data)] = result;
        this.updatedData.emit(this.budgetItems);
        console.log(result);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
