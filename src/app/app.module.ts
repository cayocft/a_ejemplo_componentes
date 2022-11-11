import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FormularioComponent } from './componentes/formulario/formulario.component'
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
