
import { v4 as uuidv4 } from 'uuid';
export class Hero
{
    /**
     * Attributs privés de la classe
     * Ne sont pas accessibles en dehors de la classe elle-même
     */
    id:string;
    pseudo:string;
    nom:string;
    prenom:string;
    estSuperVilain:boolean;
    image:string;
    shortText:string;
    longText:string;
    /***
     * Getters et setters
     */
    /*get id():string
    {
        return this._id;
    }
    get pseudo():string
    {
        return this._pseudo;
    }
    
    set pseudo(v : string) {
        
            this._pseudo = v;
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
    {*/
        /** 
         *  le getter permet ici d'ajouter le chemin d'accès des images par défaut
         * nul besoin de stocker ce chemin d'accès dans une base de données ou autre
         * peut être une valeur enregistrée dans une constante de configuration
         * l'absence de setter empêche de modifier les information = lecture seule
        */
     /*   return 'assets/img/'+this._image;
    }
    get shortText():string
    {
        return this._shortText;
    }
    get longText():string
    {
        return this._longText;
    }
*/
    constructor (pPseudo:string,pNom:string,pPrenom:string,pEstSuperVilain:boolean,
        pImage:string,pShortText:string,pLongText:string)
    {
      
       
        this.id =  uuidv4()
        this.prenom = pPrenom;
        this.nom = pNom;
        this.pseudo = pPseudo;
        this.estSuperVilain = pEstSuperVilain;
        this.image = pImage;
        this.shortText = pShortText;
        this.longText = pLongText;
    }
}