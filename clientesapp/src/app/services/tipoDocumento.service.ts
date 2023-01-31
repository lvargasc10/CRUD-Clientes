import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../models/tipoDocumento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private urlEndPoint:string = 'http://localhost:8090/api/tipo-documentos/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
  
   }

  listar():Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.urlEndPoint);
  }

  ver(id:number):Observable<TipoDocumento>{
    return this.http.get<TipoDocumento>(`${this.urlEndPoint}/${id}`);
  }

  crear(tipoDocumento:TipoDocumento):Observable<TipoDocumento>{
    return this.http.post<TipoDocumento>(this.urlEndPoint,tipoDocumento,{headers:this.httpHeaders});
  }

  modificar(tipoDocumento:TipoDocumento):Observable<TipoDocumento>{
    return this.http.put<TipoDocumento>(`${this.urlEndPoint}/${tipoDocumento.id}`,
    tipoDocumento,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,
    {headers:this.httpHeaders});
  }

  listarPagina(page:string,size:string):Observable<any>{
    const  params = new HttpParams()
    .set('page',page)
    .set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }

}