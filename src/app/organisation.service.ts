import { Injectable } from '@angular/core';
import { Organization } from './business/Organization';
import { ORGANISATIONS } from './business/MockOrganisation'

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor() { }
  getOrganisations(): Organization[] {
    console.log(" appel:getOrganisations");
    return ORGANISATIONS;
  }
  getOneOrga(uid:string): Organization {
    console.log(" appel:getOneOrga");
    return ORGANISATIONS.find(orga=>{return orga.id == uid})!;
  }
}
