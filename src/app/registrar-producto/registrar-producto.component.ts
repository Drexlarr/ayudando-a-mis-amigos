import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto: Producto;
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.producto = new Producto();
  }

  save(){
    this.service.registrarProducto(this.producto);
    this.router.navigate(["/componente"]);
  }
}
