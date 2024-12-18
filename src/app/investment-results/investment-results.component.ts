import { Component,computed,inject} from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}