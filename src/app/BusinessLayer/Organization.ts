import { Hero } from "./Hero";
import { v4 as uuidv4 } from 'uuid';

export class Organization {
    id:string;
   name: string;
   headQuarterName: string;
    leader: Hero;
    members: Hero[];
    isEvil:boolean;
   
constructor(pName:string, pHeadQuarterName: string,pLeader: Hero,pIsEvil:boolean)
    {
        this.id =  uuidv4();
        this.name = pName;
        this.headQuarterName =pHeadQuarterName;
        this.leader = pLeader;
        // par défaut, il n'y a personne dans la liste
        this.members = [];
        this.isEvil = pIsEvil;
    }
    addMember(pNewMember: Hero)
    {
        console.log('ajout du super hero '+pNewMember.pseudo+' chez '+ this.name)
        this.members.push(pNewMember);
    }
    removeMember(pFiredMember : Hero)
    {
        const indiceFiredMember = this.members
            .findIndex(member => {return member.id == pFiredMember.id})
        this.members.slice(indiceFiredMember,indiceFiredMember+1);
    }
}