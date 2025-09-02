import { DatePipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  imports: [DatePipe, NgStyle],
  templateUrl: './expense.html',
  styleUrl: './expense.css'
})
export class ExpenseComponent {
  @Input() id!: number;
  @Input() name!: string;   
  @Input() amount!: number; 
  @Input() category!: string;
  @Input() date!: Date;

  
  getCategoryStyle() {    
    switch (this.category) {
      case 'food': return { backgroundColor: 'green' };
      case 'housing': return { backgroundColor: 'orange' };
      case 'utilities': return { backgroundColor: 'blue' };
      default: return { backgroundColor: 'purple' };
    }
  }
}
