import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeroComponent } from './show-hero/show-hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ShowDetailHeroComponent } from './show-detail-hero/show-detail-hero.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ShowHeroComponent,
    HeroesComponent,
    ShowDetailHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule/*,
    RouterModule.forRoot([
      {path: 'heroes-list', component: HeroesComponent},
      {path: 'hero-detail/:id', component: ShowDetailHeroComponent},
    ]),*/
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
