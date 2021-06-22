import { Component, OnInit } from '@angular/core';
import { Hero } from '../business/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // cette liste peut être nulle si d'avanture le service Hero-service echoue
  listHeroes?: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.listHeroes = this.heroService.getHeroes();
  }

}
