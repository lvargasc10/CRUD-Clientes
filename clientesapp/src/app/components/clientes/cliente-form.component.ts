
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TipoDocumento } from "src/app/models/tipoDocumento";
import { PageEvent } from '@angular/material/paginator';
import { TipoDocumentoService } from 'src/app/services/tipoDocumento.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']

})
export class ClienteFormComponent implements OnInit {

  titulo: string = 'Formulario Cliente';
  listaD: TipoDocumento[] = [];

  totalRegistros = 0;
  totalPorPagina = 5;
  paginaActual = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  cliente: Cliente = new Cliente();
  error: any;

  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute, private serviceD: TipoDocumentoService) { }

  ngOnInit(): void {
    this.editar();
    this.listarDocs();

  }

  private listarDocs() {
    this.serviceD.listarPagina(this.paginaActual.toString(),
      this.totalPorPagina.toString()).subscribe(p => {
        this.listaD = p.content as TipoDocumento[];
        this.totalRegistros = p.totalElements as number;

      });

  }

  crear() {
    this.service.crear(this.cliente).subscribe(cliente => {
      Swal.fire('Crear Cliente', `Cliente ${cliente.numeroDocumento} fue creado con exito`, 'success');
      this.router.navigate(['/clientes']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
      }
    })
  }

  editar(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.ver(id).subscribe((cliente) => this.cliente = cliente);
      }
    })
  }

  modificar() {
    this.service.modificar(this.cliente).subscribe(cliente => {
      Swal.fire('Modificado', `Cliente ${cliente.numeroDocumento} modificado con exito`, `success`)
      this.router.navigate(['/clientes']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
      }
    })
  }
}
