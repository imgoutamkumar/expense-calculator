import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddItemFormComponent } from '../../components/add-item-form/add-item-form.component';
import { ExpensesListComponent } from '../../components/expenses-list/expenses-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    AddItemFormComponent,
    ExpensesListComponent,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.isItemsEmpty();
  }
  items = new Array<any>();

  addItem(e: Event) {
    this.items.push(e);
    console.log(this.items);
    this.isItemsEmpty();
  }
  removeItem(e: Event) {
    /* let updatedItem = this.items.filter((item) => {
      return this.items.indexOf(item) != this.items.indexOf(e);
    });
    console.log('updated items after remove', updatedItem); */
    let index = this.items.indexOf(e);
    this.items.splice(index, 1);
    this.isItemsEmpty();
  }
  isListEmpty: boolean = false;
  isItemsEmpty() {
    if (this.items.length != 0) {
      this.isListEmpty = true;
    } else {
      this.isListEmpty = false;
    }
  }
  openCalculator() {
    alert('Calculator on development phase...');
  }
}
