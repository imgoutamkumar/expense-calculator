import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddItemFormComponent } from '../../components/add-item-form/add-item-form.component';
import { ExpensesListComponent } from '../../components/expenses-list/expenses-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { EditAddItemFormComponent } from '../../components/edit-add-item-form/edit-add-item-form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    AddItemFormComponent,
    EditAddItemFormComponent,
    ExpensesListComponent,
    MatIconModule,
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.isItemsEmpty();
  }

  items = new Array<any>();

  addItem(e: Event) {
    this.items.push(e);
    this.isItemsEmpty();
    this.calculateTotal();
  }

  removeItem(e: Event) {
    let index = this.items.indexOf(e);
    this.items.splice(index, 1);
    this.isItemsEmpty();
    this.calculateTotal();
  }

  updateItem(e: Event) {
    console.log(e);
    this.calculateTotal();
  }

  isListEmpty: boolean = false;
  isItemsEmpty() {
    if (this.items.length != 0) {
      this.isListEmpty = true;
    } else {
      this.isListEmpty = false;
    }
  }

  total: number = 0;
  calculateTotal() {
    this.total = this.items.reduce((previousValue, items) => {
      return previousValue + items.amount;
    }, 0);
  }

  openCalculator() {
    alert('Calculator on development phase...');
  }
}
