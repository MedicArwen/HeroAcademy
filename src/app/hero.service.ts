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
  getOneHero(uid:string): Hero {
    return HEROES.find(hero=>{return hero.id == uid})!;
  }
}
