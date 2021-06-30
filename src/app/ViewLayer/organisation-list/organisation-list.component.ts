import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../DataLayer/organisation.service';
import { Organization } from '../../BusinessLayer/Organization';
import { DataAccessService } from 'src/app/DataLayer/data-access.service';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.scss']
})
export class OrganisationListComponent implements OnInit {

  listeOrganisation: Organization[];
  constructor(private orgaService : OrganisationService, private dataService:DataAccessService) {
    this.listeOrganisation = this.orgaService.getOrganisations();

   }

  ngOnInit(): void {
    this.listeOrganisation = this.orgaService.getOrganisations();
    this.orgaService.listChangedEvent.subscribe((orgaList:Organization[])=>
    {
      this.listeOrganisation = this.orgaService.getOrganisations();
      this.dataService.saveOrgas()
    });
    this.dataService.fetchOrgas();
  }

}
