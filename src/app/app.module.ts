import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
    AppComponent, 
    HeaderComponent,
    UserInputComponent,
    InvestmentResultComponent
  ],
  imports: [
    FormsModule,BrowserModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}