import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente: Cliente;
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.productos = [];
  }

  save(){
    console.log(this.cliente);
    this.service.registrarCliente(this.cliente);
    this.router.navigate(["/componente"]);
  }
}
