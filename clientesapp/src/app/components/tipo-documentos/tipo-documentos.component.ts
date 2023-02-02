import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TipoDocumento } from 'src/app/models/tipoDocumento';
import { TipoDocumentoService } from 'src/app/services/tipoDocumento.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-tipo-documentos',
  templateUrl: './tipo-documentos.component.html',
  styleUrls: ['./tipo-documentos.component.css']
})
export class TipoDocumentosComponent implements OnInit {

  titulo: string = 'Listado Tipo Documentos';
  lista: TipoDocumento[] = [];
  tipoDocumentos: TipoDocumento = new TipoDocumento();
  totalRegistros = 0;
  totalPorPagina = 5;
  paginaActual = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private service: TipoDocumentoService) { }

  ngOnInit(): void {
    this.calcularRangos();

  }

  editar(descripcion: string): void {
    this.tipoDocumentos.descripcion = descripcion;

  }

  private calcularRangos() {
    this.service.listarPagina(this.paginaActual.toString(),
      this.totalPorPagina.toString()).subscribe(p => {
        this.lista = p.content as TipoDocumento[];
        this.totalRegistros = p.totalElements as number;
      });
  }

  paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  eliminar(tipoDocumento: TipoDocumento): void {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar a ${tipoDocumento.descripcion} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(tipoDocumento.id).subscribe(() => {
          this.calcularRangos();
          Swal.fire('Eliminar Tipo Documentos', `Documentos ${tipoDocumento.descripcion} eliminado con exito`, 'success');
        })
      }
    })
  }
  
  modificar(tipoDocumento: TipoDocumento): void {

    this.service.modificar(tipoDocumento).subscribe(() => {

    })
  }

}
