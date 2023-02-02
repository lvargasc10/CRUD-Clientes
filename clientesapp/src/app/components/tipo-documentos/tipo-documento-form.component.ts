
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipoDocumento';
import { TipoDocumentoService } from 'src/app/services/tipoDocumento.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-documento-form',
  templateUrl: './tipo-documento-form.component.html',
  styleUrls: ['./tipo-documento-form.component.css']
})
export class TipoDocumentoFormComponent implements OnInit {

  titulo: string = 'Formulario Tipo Documento';
  tipoDocumento: TipoDocumento = new TipoDocumento();
  error: any;
  constructor(private service: TipoDocumentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear() {
    this.service.crear(this.tipoDocumento).subscribe(tipoDocumento => {
      Swal.fire('Crear Tipo Documento', `Tipo Documento ${tipoDocumento.descripcion} fue creado con exito`, 'success');
      this.router.navigate(['/tipo-documentos']);
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
        this.service.ver(id).subscribe((tipoDocumento) => this.tipoDocumento = tipoDocumento);
      }
    })
  }

  modificar() {
    this.service.modificar(this.tipoDocumento).subscribe(tipoDocumento => {
      Swal.fire('Modificado', `Tipo Documento ${tipoDocumento.descripcion} modificado con exito`, `success`)
      this.router.navigate(['/tipo-documentos']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
      }
    })
  }
}
