import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationListComponent } from './ViewLayer/organisation-list/organisation-list.component';
import { HeroesComponent } from './ViewLayer/heroes/heroes.component';
import { ShowDetailHeroComponent } from './ViewLayer/show-detail-hero/show-detail-hero.component';
import { CreateOrganisationComponent } from './ViewLayer/create-organisation/create-organisation.component';
import { CreateHeroComponent } from './ViewLayer/create-hero/create-hero.component';

const routes: Routes = 
  [ 
    {path: 'heroes-list', component: HeroesComponent},
    {path: 'hero-detail/:id', component: ShowDetailHeroComponent},
    {path: 'organisation-list', component: OrganisationListComponent},
    {path: 'organisation-create', component: CreateOrganisationComponent},
    {path: 'hero-create', component: CreateHeroComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
