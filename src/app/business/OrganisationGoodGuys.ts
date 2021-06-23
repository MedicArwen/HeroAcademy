import { Hero } from "./Hero";
import { Organization } from "./Organization";
import { Precepte } from "./Precepte";

export class OrganisationGoodGuys extends Organization
{
    private _listPreceptes: Precepte[];
    public get listPreceptes(): Precepte[] {
        return this._listPreceptes;
    }


    constructor(pName:string,pHeadQuarterName:string,pLeader:Hero)
    {
        super(pName,pHeadQuarterName,pLeader,false);
        this._listPreceptes = [];
    }

    addPrecepte(pNewPrecept: Precepte)
    {
        console.log('ajout du précepte '+pNewPrecept.shortText+' chez '+ this.name)
        this._listPreceptes.push(pNewPrecept);
    }
    removePrecepte(pFiredPrecept : Precepte)
    {
        const indiceFiredPrecepte = this._listPreceptes.findIndex(precepte => {return precepte.id == pFiredPrecept.id})
        this._listPreceptes.slice(indiceFiredPrecepte,indiceFiredPrecepte+1);
    }
}