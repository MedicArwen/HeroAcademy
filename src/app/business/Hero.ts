import { ThrowStmt } from "@angular/compiler";

export class Hero
{
    id:number;
    pseudo:string;
    nom:string;
    prenom:string;
    estSuperVilain:boolean;
    image:string;
    shortText:string;
    longText:String;

    constructor (pID:number,pPseudo:string,pNom:string,pPrenom:string,pEstSuperVilain:boolean,
        pImage:string,pShortText:string,pLongText:string)
    {
        this.id = pID;
        this.prenom = pPrenom;
        this.nom = pNom;
        this.pseudo = pPseudo;
        this.estSuperVilain = pEstSuperVilain;
        this.image = pImage;
        this.shortText = pShortText;
        this.longText = pLongText;
    }
}