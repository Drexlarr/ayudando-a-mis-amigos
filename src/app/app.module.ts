import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { ClientesComponent } from './componente/clientes/clientes.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { CarritoComponent } from './componente/carrito/carrito.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ClientesComponent,
    ProductosComponent,
    CarritoComponent,
    RegistrarClienteComponent,
    RegistrarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
