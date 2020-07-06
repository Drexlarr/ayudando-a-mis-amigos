import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';


const routes: Routes = [
  {path:"inicio", component:ComponenteComponent},
  {path:"componente", component:ComponenteComponent},
  {path:"registrarProducto", component:RegistrarProductoComponent},
  {path:"registrarCliente", component:RegistrarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
