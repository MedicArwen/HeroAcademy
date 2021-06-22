import { Injectable } from '@angular/core';
import { Hero } from './business/Hero';
import {HEROES} from './business/MockHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
  getOneHero(i:number): Hero {
    return HEROES[i];
  }
}
