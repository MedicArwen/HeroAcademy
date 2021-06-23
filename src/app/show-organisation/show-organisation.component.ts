import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../business/Organization';

@Component({
  selector: 'app-show-organisation',
  templateUrl: './show-organisation.component.html',
  styleUrls: ['./show-organisation.component.scss']
})
export class ShowOrganisationComponent implements OnInit {

  @Input() currentOrganisation?: Organization;
  constructor() { }

  ngOnInit(): void {
  }

}
