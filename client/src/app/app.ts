import { Component, signal } from '@angular/core';
import { ExpenseComponent } from './components/expense/expense';
import { Expense } from './components/expense/model';
import { RouterOutlet } from '@angular/router';
// 3 Parts of an Angular Component
// Typescript Class (Defines component logic, e.g. event handlers)
// HTML Template (Declares the UI)
// CSS Styles (Styles the UI)

@Component({
  // selector is the name of the component, i.e. <app-root> </app-root>
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseComponent], // import Components here
  // template and styles could be inline here if we want 
  // templateUrl and styleUrl tell us where the template and styles are
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Like useEffect 
  ngOnInit() {
    console.log("App Component mounted");
  }
  // Can use signal or not for state, either works
  title = signal('client');
  variable = signal("coolVariable");
  name1 = signal("Jacob");
  inputText = "Idek";


  expenses: Expense[] = [
      { id: 1, name: 'Groceries', amount: 50, category: "food", date: new Date()},
      { id: 2, name: 'Rent', amount: 1200, category: "utilities", date: new Date()},
      { id: 3, name: 'Utilities', amount: 200, category: "housing", date: new Date()}
    ];
  

  printText = () => {
    console.log(`Input is: ${this.inputText}`)
  }

  onInputChange = (event: Event) => {
    event.preventDefault();
    this.inputText = ((event.target as HTMLInputElement).value);
    console.log(this.inputText);
  }

}
