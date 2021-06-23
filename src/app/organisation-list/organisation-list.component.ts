import { Component, OnInit } from '@angular/core';
import { Organization } from '../business/Organization';
import { OrganisationService } from '../organisation.service';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.scss']
})
export class OrganisationListComponent implements OnInit {

  listeOrganisation: Organization[];
  constructor(private orgaService : OrganisationService) {
    this.listeOrganisation = this.orgaService.getOrganisations();

   }

  ngOnInit(): void {

  }


}
