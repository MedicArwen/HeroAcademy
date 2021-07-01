
import { EventEmitter, Injectable } from '@angular/core';
import { Organization } from '../BusinessLayer/Organization';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  listOrganisation: Organization[] = [];
  listChangedEvent: EventEmitter<Organization[]> = new EventEmitter();

  constructor() {
    console.log('OrganisationService::Constructor');
    
   }
  getOrganisations(): Organization[] {
    console.log(" appel:getOrganisations:"+this.listOrganisation.length+" orgas trouvées");
    return this.listOrganisation;
  }
  getOrga(uid:string): Organization {
    console.log(" appel:getOneOrga");
    return this.listOrganisation.find(orga=>{return orga.id == uid})!;
  }
  createOrganisation(pOrganisation:Organization)
  {
    console.log('appel:createOrganisation')
   this.listOrganisation.push(pOrganisation);
   this.listChangedEvent.emit(this.listOrganisation);
  }
  setList(plistOrganisation:Organization[])
  {
    console.log('setList!: organisations trouvés ='+plistOrganisation.length)
    this.listOrganisation = plistOrganisation; 
   
    this.listChangedEvent.emit(this.listOrganisation);
  }
}
