import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../business/Hero';
import { ORGANISATIONS } from '../business/MockOrganisation';
import { OrganisationBadGuys } from '../business/OrganisationBadGuys';
import { OrganisationGoodGuys } from '../business/OrganisationGoodGuys';
import { HeroService } from '../hero.service';

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


  constructor(heroService: HeroService) {
     this.listHeroes = heroService.getHeroes(); 
     this.leader = this.listHeroes[0];
     this.organisationName = new FormControl('',[Validators.required,
     Validators.minLength(4)]);
    this.organisationHeadQuarterName = new FormControl('',[Validators.required,
      Validators.minLength(4)]);
    this.typeOrga = new FormControl('',[Validators.required]);
     this.organisationLeader = new FormControl(this.listHeroes[0]!);
     
     this.form = new FormGroup(
        {
          organisationName:this.organisationName,
          organisationHeadQuarterName:this.organisationHeadQuarterName,
          organisationLeader:this.organisationLeader,
          typeOrga:this.typeOrga});
    }
  
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log('SUBMITED:'+this.form.value['organisationName']);
    console.log('SUBMITED:'+this.form.value['organisationHeadQuarterName']);
    console.log('SUBMITED:'+this.form.value['organisationLeader'].pseudo);
    console.log('SUBMITED:'+this.form.value['typeOrga']);
   if (this.form.value['typeOrga']=='evil')
        ORGANISATIONS.push(
          new OrganisationBadGuys
          (
            this.form.value['organisationName'],
            this.form.value['organisationHeadQuarterName'],
            this.form.value['organisationLeader']
          )
        )
        else
        ORGANISATIONS.push(
          new OrganisationGoodGuys
          (
            this.form.value['organisationName'],
            this.form.value['organisationHeadQuarterName'],
            this.form.value['organisationLeader']
          )
        )
    
  }
}
