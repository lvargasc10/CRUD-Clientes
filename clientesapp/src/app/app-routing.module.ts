import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoDocumentosComponent } from './components/tipo-documentos/tipo-documentos.component';
import { TipoDocumentoFormComponent } from './components/tipo-documentos/tipo-documento-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'tipo-documentos',component:TipoDocumentosComponent},
  {path:'tipo-documentos/form',component:TipoDocumentoFormComponent},
  {path:'tipo-documentos/form/:id',component:TipoDocumentoFormComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'clientes/form',component:ClienteFormComponent},
  {path:'clientes/form/:id',component:ClienteFormComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
