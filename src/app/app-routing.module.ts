import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ShowDetailHeroComponent } from './show-detail-hero/show-detail-hero.component';

const routes: Routes = [ {path: 'heroes-list', component: HeroesComponent},
{path: 'hero-detail/:id', component: ShowDetailHeroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
