import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ServicioService } from 'src/app/servicio.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[]
  constructor(private service: ServicioService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.service.obtenerProductos().subscribe(data=>this.productos = data);
  }
  addProduct(p:Producto){
    this.messageService.sendMsg(p);
  }

}
