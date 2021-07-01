
import { EventEmitter, Injectable } from '@angular/core';
import { Hero } from '../BusinessLayer/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  listChangedEvent: EventEmitter<Hero[]> = new EventEmitter();
  heroList:Hero[] = [];
  constructor() { }

  getHeroes(): Hero[] {
    console.log('get heroes():'+this.heroList.length)
   return this.heroList;
  }
  getHero(uid:string): Hero {
    return this.heroList.find(hero=>{return hero.id == uid})!;
  }
  createHero(pHero:Hero)
  {
    console.log('creation du héro: '+pHero.pseudo);
    console.log(pHero)
    this.heroList.push(pHero)
    this.listChangedEvent.emit(this.heroList);
  }
  
  setList(pListHero:Hero[])
  {
    console.log('setList!: heros trouvés ='+pListHero.length)
    this.heroList = pListHero;
    this.listChangedEvent.emit(this.heroList);
  }
}
