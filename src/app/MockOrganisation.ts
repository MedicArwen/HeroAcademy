import { HEROES } from "./MockHeroes";
import { OrganisationGoodGuys } from "./BusinessLayer/OrganisationGoodGuys";
import { Organization } from "./BusinessLayer/Organization";


export const ORGANISATIONS: Organization[] = 
[new OrganisationGoodGuys('Justice League','New-York',HEROES[0])
  ];