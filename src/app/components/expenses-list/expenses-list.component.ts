import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule, FormsModule],
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.scss',
})
export class ExpensesListComponent {
  @Input() budgetItems = Array<any>();
  @Output() close = new EventEmitter<any>();

  closeButtonClicked(item: any) {
    this.close.emit(item);
  }
}
