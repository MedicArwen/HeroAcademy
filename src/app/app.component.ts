import { Component } from '@angular/core';
import { DataAccessService } from './DataLayer/data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HeroAcademy';
  constructor(    private dataService:DataAccessService)
  {
    this.dataService.fetchHeroes();
    this.dataService.fetchOrgas();
  }
 
}

