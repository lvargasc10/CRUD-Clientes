import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TipoDocumento } from "src/app/models/tipoDocumento";
import { TipoDocumentoService } from 'src/app/services/tipoDocumento.service';



import Swal from 'sweetalert2';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  titulo:string ='Listado Clientes';
  lista:Cliente[]=[];
  listaD:TipoDocumento[]=[];
  cliente:Cliente = new Cliente();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOptions: number[] = [5,10,25,100];
  constructor(private service:ClienteService,private serviceD:TipoDocumentoService) { }
 

  ngOnInit(): void { 
    this.calcularRangos();  
   }

  editar(numeroDocumento: string):void{    
    this.cliente.numeroDocumento=numeroDocumento;        
  }

  private calcularRangos(){
    this.service.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.lista= p.content as Cliente[];
      this.totalRegistros = p.totalElements as number;  
      
    });
    this.serviceD.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.listaD= p.content as TipoDocumento[];
      this.totalRegistros = p.totalElements as number;  
    });
  }

  paginar(event: PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  eliminar(cliente:Cliente):void{    
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar a ${cliente.numeroDocumento} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(cliente.id).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==cliente); 
          this.calcularRangos();
          Swal.fire('Eliminar Cliente',`Cliente ${cliente.numeroDocumento} eliminado con exito`,'success'); 
        })
      }
    })
  }

  modificar(cliente:Cliente):void{    
        this.service.modificar(cliente).subscribe(() =>{                
          
        })
      }  
  
}
