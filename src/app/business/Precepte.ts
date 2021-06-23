

import { v4 as uuidv4 } from 'uuid';
export class Precepte

{
    id: string;
    shortText : string;
    longText: string;
    constructor (pShortText:string,pLongText:string)
    {

        this.id = uuidv4();
        this.shortText = pShortText;
        this.longText = pLongText;
    }
}