import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  imports: [],
  templateUrl: './expense.html',
  styleUrl: './expense.css'
})
export class Expense {
  @Input() expenseName!: string;   // acts like a prop
  @Input() expenseAmount!: number; // acts like a prop

}
