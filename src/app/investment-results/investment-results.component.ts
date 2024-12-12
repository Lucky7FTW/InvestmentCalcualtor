import { CurrencyPipe } from '@angular/common';
import { Component,inject} from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  get results(){
    return this.investmentService.resultsData;
  }
}