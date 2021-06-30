
import { v4 as uuidv4 } from 'uuid';

export class Crime
{
    // l'identifiant est en lecture-seule, il ne peut pas être modifié
    // en dehors de la classe (et même du constructeur sauf si on code)
    private _id: string;
    public get id(): string {
        return this._id;
    }
    // fonctionnellement, permettre de modifier en dehors de la classe peut être bien
    // le set permet de mettre des garde-fou si besoin
    private _shortText: string;
    public get shortText(): string {
        return this._shortText;
    }
    public set shortText(value: string) {
        this._shortText = value;
    }
    private _longText: string;
    public get longText(): string {
        return this._longText;
    }
    public set longText(value: string) {
        this._longText = value;
    }
    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    constructor (pShortText:string,pLongText:string,pDate:Date)
    {
        this._id = uuidv4()
        this._date = pDate;
        this._shortText = pShortText;
        this._longText = pLongText;
    }
}