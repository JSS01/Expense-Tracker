import { Component, signal } from '@angular/core';
import { Expense } from './components/expense/expense';
import { RouterOutlet } from '@angular/router';
// 3 Parts of an Angular Component
// Typescript Class (Defines component logic, e.g. event handlers)
// HTML Template (Declares the UI)
// CSS Styles (Styles the UI)

@Component({
  // selector is the name of the component, i.e. <app-root> </app-root>
  selector: 'app-root',
  imports: [RouterOutlet, Expense], // import Components here
  // template and styles could be inline here if we want 
  // templateUrl and styleUrl tell us where the template and styles are
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Like useEffect 
  ngOnInit() {
    console.log("[Me] App Component mounted");
  }
  // Can use signal or not for state, either works
  protected readonly title = signal('angular-app');
  variable = signal("coolVariable");
  name1 = signal("Jacob");
  inputText = "Idek";

  expenses = [
    { id: 1, name: 'Groceries', amount: 50 },
    { id: 2, name: 'Rent', amount: 1200 },
    { id: 3, name: 'Utilities', amount: 200 }
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
