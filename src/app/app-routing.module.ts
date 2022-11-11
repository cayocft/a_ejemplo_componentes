import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "nosotros",
    component: NosotrosComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
