import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}