import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/DataLayer/data-access.service';
import { Hero } from '../../BusinessLayer/Hero';
import { HeroService } from '../../DataLayer/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // cette liste peut être nulle si d'avanture le service Hero-service echoue
  listHeroes: Hero[] = [];
  constructor(private heroService: HeroService,private dataService:DataAccessService) { }

  ngOnInit(): void {
    this.listHeroes = this.heroService.getHeroes();
    this.heroService.listChangedEvent.subscribe((heroList:Hero[])=>
    {
      this.listHeroes = this.heroService.getHeroes();
      this.dataService.saveHeroes()
    });
    this.dataService.fetchHeroes();
  }
}