import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../DataLayer/organisation.service';
import { Organization } from '../../BusinessLayer/Organization';
import { DataAccessService } from 'src/app/DataLayer/data-access.service';
import { Precepte } from 'src/app/BusinessLayer/Precepte';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.scss']
})
export class OrganisationListComponent implements OnInit {

  listeOrganisation: Organization[];
  constructor(private orgaService : OrganisationService, private dataService:DataAccessService) {
   // this.listeOrganisation = this.orgaService.getOrganisations();
   this.listeOrganisation = [];
    this.dataService.fetchOrgas();
   }

  ngOnInit(): void {
  
    this.orgaService.listChangedEvent.subscribe((orgaList:Organization[])=>
    {
      console.log('orgaService.listChanged:subscribe: call back ');
      console.log('il y a '+orgaList.length+' elements dans orgaListe');
      console.log('il y a '+this.listeOrganisation.length+' elements dans this.listOrganisation');
      console.log('il y a '+this.orgaService.listOrganisation.length+' elements dans orgaservice.listOrganisation');
     
      this.dataService.saveOrgas(orgaList);
      this.listeOrganisation = orgaList;
      
    });
    
  }

}
