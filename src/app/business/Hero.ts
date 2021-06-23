
import { v4 as uuidv4 } from 'uuid';
export class Hero
{
    /**
     * Attributs privés de la classe
     * Ne sont pas accessibles en dehors de la classe elle-même
     */
    private _id:string;
    private _pseudo:string;
    private _nom:string;
    private _prenom:string;
    private _estSuperVilain:boolean;
    private _image:string;
    private _shortText:string;
    private _longText:string;
    /***
     * Getters et setters
     */
    get id():string
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
        /** 
         *  le getter permet ici d'ajouter le chemin d'accès des images par défaut
         * nul besoin de stocker ce chemin d'accès dans une base de données ou autre
         * peut être une valeur enregistrée dans une constante de configuration
         * l'absence de setter empêche de modifier les information = lecture seule
        */
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

    constructor (pPseudo:string,pNom:string,pPrenom:string,pEstSuperVilain:boolean,
        pImage:string,pShortText:string,pLongText:string)
    {
      
       
        this._id =  uuidv4()
        this._prenom = pPrenom;
        this._nom = pNom;
        this._pseudo = pPseudo;
        this._estSuperVilain = pEstSuperVilain;
        this._image = pImage;
        this._shortText = pShortText;
        this._longText = pLongText;
    }
}