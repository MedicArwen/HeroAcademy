import { Hero } from "./Hero";
import { v4 as uuidv4 } from 'uuid';

export class Organization {
    private _id:string;
    public get id(): string {
        return this._id;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }

    private _headQuarterName: string;
    public get headQuarterName(): string {
        return this._headQuarterName;
    }

    private _leader: Hero;
    public get leader(): Hero {
        return this._leader;
    }

    private _members: Hero[];
    public get members(): Hero[] {
        return this._members;
    }

constructor(pName:string, pHeadQuarterName: string,pLeader: Hero)
    {
        this._id =  uuidv4();
        this._name = pName;
        this._headQuarterName =pHeadQuarterName;
        this._leader = pLeader;
        // par défaut, il n'y a personne dans la liste
        this._members = [];
    }
    addMember(pNewMember: Hero)
    {
        console.log('ajout du super hero '+pNewMember.pseudo+' chez '+ this.name)
        this._members.push(pNewMember);
    }
    removeMember(pFiredMember : Hero)
    {
        const indiceFiredMember = this._members.findIndex(member => {return member.id == pFiredMember.id})
        this._members.slice(indiceFiredMember,indiceFiredMember+1);
    }
}