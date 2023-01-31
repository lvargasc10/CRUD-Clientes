import { TipoDocumento } from "./tipoDocumento";


export class Cliente {

    id:number=0;
    tipoDocumento:TipoDocumento=new TipoDocumento();
    numeroDocumento:string="";
    razonSocial:string="";
    apellidos:string="";
    nombres:string="";
    fechaNacimiento:Date= new Date('yyyy-MM-dd');
    genero:string=""; 
    
}
