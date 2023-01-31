import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TipoDocumentosComponent } from './components/tipo-documentos/tipo-documentos.component';
import { TipoDocumentoFormComponent } from './components/tipo-documentos/tipo-documento-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    TipoDocumentosComponent,
    TipoDocumentoFormComponent,
    ClientesComponent,
    ClienteFormComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,  
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgbModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
