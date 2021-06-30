export interface IListable {

    shortText:string; // décrit la liste
    ajouterElement:(element:any)=>void;
    retirerElement:(element:any)=>void;
}
