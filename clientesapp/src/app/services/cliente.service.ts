import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8090/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
   }

  listar():Observable<Cliente[]>{  
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  ver(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  crear(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders});
  }

  modificar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,
    cliente,{headers:this.httpHeaders});
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