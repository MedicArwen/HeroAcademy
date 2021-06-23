import { ThrowStmt } from "@angular/compiler";

export class Hero
{
    private _id:number;
    private _pseudo:string;
    private _nom:string;
    private _prenom:string;
    private _estSuperVilain:boolean;
    private _image:string;
    private _shortText:string;
    private _longText:string;
    get id():number
    {
        return this._id;
    }
    get pseudo():string
    {
        return this._pseudo;
    }
    get nom():string
    {
        return this._nom;
    }
    get prenom():string
    {
        return this._prenom;
    }
    get estSuperVilain():boolean
    {
        return this._estSuperVilain;
    }
    get image():string
    {
        return 'assets/img/'+this._image;
    }
    get shortText():string
    {
        return this._shortText;
    }
    get longText():string
    {
        return this._longText;
    }

    constructor (pID:number,pPseudo:string,pNom:string,pPrenom:string,pEstSuperVilain:boolean,
        pImage:string,pShortText:string,pLongText:string)
    {
        this._id = pID;
        this._prenom = pPrenom;
        this._nom = pNom;
        this._pseudo = pPseudo;
        this._estSuperVilain = pEstSuperVilain;
        this._image = pImage;
        this._shortText = pShortText;
        this._longText = pLongText;
    }
}