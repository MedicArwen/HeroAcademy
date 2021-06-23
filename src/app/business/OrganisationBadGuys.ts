import { Crime } from "./Crime";
import { Hero } from "./Hero";
import { Organization } from "./Organization";

export class OrganisationBadGuys extends Organization 
{
    private _listCrimes: Crime[];
    public get listCrimes(): Crime[] {
        return this._listCrimes;
    }


    constructor(pName:string,pHeadQuarterName:string,pLeader:Hero)
    {
        super(pName,pHeadQuarterName,pLeader);
        this._listCrimes = [];
    }

    addPrecepte(pNewCrime: Crime)
    {
        console.log('ajout du crime '+pNewCrime.shortText+' chez '+ this.name)
        this._listCrimes.push(pNewCrime);
    }
    removePrecepte(pFiredCrime : Crime)
    {
        const indicefiredCrime = this._listCrimes.findIndex(crime => {return crime.id == pFiredCrime.id})
        this._listCrimes.slice(indicefiredCrime,indicefiredCrime+1);
    } 
}