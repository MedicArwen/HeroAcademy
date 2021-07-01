import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../BusinessLayer/Hero';
import { HeroService } from '../../DataLayer/hero.service';
import { OrganisationBadGuys } from '../../BusinessLayer/OrganisationBadGuys';
import { OrganisationGoodGuys } from '../../BusinessLayer/OrganisationGoodGuys';
import { OrganisationService } from 'src/app/DataLayer/organisation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataAccessService } from 'src/app/DataLayer/data-access.service';

@Component({
  selector: 'app-create-organisation',
  templateUrl: './create-organisation.component.html',
  styleUrls: ['./create-organisation.component.scss']
})
export class CreateOrganisationComponent implements OnInit {

  organisationName :FormControl;
  organisationHeadQuarterName :FormControl;
  organisationLeader :FormControl
  typeOrga :FormControl;
  form : FormGroup;
  listHeroes : Hero[];
  leader: Hero;


  constructor(private heroService: HeroService,private organisationService:OrganisationService,
    private router: Router,private route: ActivatedRoute) {
    
      this.listHeroes = heroService.getHeroes(); 
     this.leader = this.listHeroes[0];
     // création des éléments du formulaire
     this.organisationName = new FormControl('',[Validators.required,
     Validators.minLength(4)]);
    this.organisationHeadQuarterName = new FormControl('',[Validators.required,
      Validators.minLength(4)]);
    this.typeOrga = new FormControl('',[Validators.required]);
     this.organisationLeader = new FormControl(this.listHeroes[0]!);
     // création du formulaire
     this.form = new FormGroup(
        {
          organisationName:this.organisationName,
          organisationHeadQuarterName:this.organisationHeadQuarterName,
          organisationLeader:this.organisationLeader,
          typeOrga:this.typeOrga});
    }
  
  ngOnInit(): void {
    this.heroService.listChangedEvent.subscribe(listeHero=>
      {
        this.organisationLeader = new FormControl(this.listHeroes[0]!)
        this.form = new FormGroup(
        {
          organisationName:this.organisationName,
          organisationHeadQuarterName:this.organisationHeadQuarterName,
          organisationLeader:this.organisationLeader,
          typeOrga:this.typeOrga});
    }
      )
  }
  onSubmit()
  {
    console.log('SUBMITTED:'+this.form.value['organisationName']);
    console.log('SUBMITTED:'+this.form.value['organisationHeadQuarterName']);
    console.log('SUBMITTED:'+this.form.value['organisationLeader']);
    console.log('SUBMITTED:'+this.form.value['typeOrga']);
   if (this.form.value['typeOrga']==='evil')
  {
    console.log('creation du supergroupe '+ this.form.value['typeOrga'])
    this.organisationService.createOrganisation(new OrganisationBadGuys
    (
      this.form.value['organisationName'],
      this.form.value['organisationHeadQuarterName'],
      this.form.value['organisationLeader']
    )) }
        else
        {
          console.log('creation du supergroupe '+ this.form.value['typeOrga'])
  
          this.organisationService.createOrganisation( new OrganisationGoodGuys
          (
            this.form.value['organisationName'],
            this.form.value['organisationHeadQuarterName'],
            this.form.value['organisationLeader']
          ))}
          this.router.navigate(['/organisation-list']);

    
  }
}
