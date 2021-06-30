import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../BusinessLayer/Hero';
import { Organization } from '../BusinessLayer/Organization';
import { tap } from 'rxjs/operators';
import { HeroService } from './hero.service';
import { OrganisationService } from './organisation.service';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private httpService: HttpClient, private heroService: HeroService,
    private orgaService:OrganisationService) { }

  fetchHeroes()
  {
    this.httpService
    .get<Hero[]>(
      'https://heros-25b11-default-rtdb.firebaseio.com/hero.json'
    )
    .pipe(tap((heroList: Hero[]) => {
      console.log('heroList chargement:');
        // Step 2 - Send to post.service
        if (heroList!=null)
        {
          console.log('Liste:'+heroList.length+' héros')
          for (let hero of heroList)
          console.log(hero)
          this.heroService.setList(heroList);
        }
       
        else
        console.log('Liste vide')
      })
    )
    .subscribe();
  }
  saveHeroes()
  {
      const heroList: Hero[] = this.heroService.getHeroes();

      this.httpService
        .put('https://heros-25b11-default-rtdb.firebaseio.com/hero.json',heroList)
        .subscribe((res:any) => {
          console.log(res);
        });
  }
  
  getHero(uid:string)
  {
   // this.httpService.put('https://heros-25b11-default-rtdb.firebaseio.com/hero.json',hero);
  }
  updateHero(hero:Hero)
  {
    this.httpService.put('https://heros-25b11-default-rtdb.firebaseio.com/hero.json',hero);
  }
  putOrganisation(organisation:Organization)
  {
    console.log('APPEL:putOrganisation');
    this.httpService.put('https://heros-25b11-default-rtdb.firebaseio.com/organisation.json',organisation)
    .subscribe((reponse)=>{console.log(reponse)});
  }
  fetchOrgas()
  {
    this.httpService
    .get<Organization[]>(
      'https://heros-25b11-default-rtdb.firebaseio.com/organisations.json'
    )
    .pipe(tap((orgaList: Organization[]) => {
      console.log('orgaList chargement:');
        // Step 2 - Send to post.service
        if (orgaList!=null)
        {
          console.log('Liste:'+orgaList.length+' orgas')
          this.orgaService.setList(orgaList);
        }
       
        else
        console.log('Liste vide')
      })
    )
    .subscribe();
  }
  saveOrgas()
  {
      const orgaList: Organization[] = this.orgaService.getOrganisations();

      this.httpService
        .put('https://heros-25b11-default-rtdb.firebaseio.com/organisations.json',orgaList)
        .subscribe((res:any) => {
          console.log(res);
        });
  }
}


