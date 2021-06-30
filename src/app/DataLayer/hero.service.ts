
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
  createHero(hero:Hero)
  {
    console.log('creation du héro suivant');
    console.log(hero)
    this.heroList.push(hero)
    this.listChangedEvent.emit(this.heroList);
  }
  
  setList(pListHero:Hero[])
  {
    console.log('setList!: heros trouvés ='+pListHero.length)
    this.heroList = [];
    for (let hero of pListHero)
    {
      console.log("ajout de "+hero.pseudo)
      this.heroList.push(hero);
    }
    console.log(this.heroList);
    this.listChangedEvent.emit(this.heroList);
  }
}
