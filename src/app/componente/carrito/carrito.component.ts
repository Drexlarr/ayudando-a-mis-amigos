import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { MessageService } from 'src/app/message.service';
import { ClienteProducto } from '../../model/cliente-producto'
import { Cliente } from 'src/app/model/cliente';
import { Producto } from 'src/app/model/producto';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  cliente: Cliente;
  selected: any;
  constructor(private service: ServicioService, private messageService:MessageService) { }

  isProducto(obj:any):Boolean{
    return (<Producto>obj).precio !== undefined;
  }

  alreadyHave(pid: number): Boolean{
    let ret = false;
    for (let x of this.cliente.productos){
      if (x.producto.id == pid) ret = true;
    }
    return ret;
  }

  ngOnInit(): void {
    this.messageService.getMsg().subscribe(data=>{
      this.selected = data;
      if (!this.isProducto(this.selected)){
        this.cliente = this.selected;
      }
      else{
        this.addToCart(this.selected);
      }
    });
  }
  
  actualizarCliente(){
    if (this.cliente !== undefined){
      this.service.obtenerCliente(this.cliente.id).subscribe(data => {
        this.cliente = data
      });
    }
  }

  addToCart(p: Producto){
    console.log("addtocart");
    let temp = this.cliente.productos.find(pr=> pr.producto.id == p.id);
    if (temp == null || temp == undefined ){
      console.log("TOY REGISTRANDO UNO NUEVO");
      this.service.registrarCP(this.cliente.id, p.id).subscribe(data => {
        this.service.obtenerCliente(this.cliente.id).subscribe(info => this.cliente = info);
        return;
      })
      return;
    }
    else{
      console.log("ya tengo uno GAAA");
      for(let x of this.cliente.productos){
        if (x.producto.id == p.id){
          this.service.actualizarCP(this.cliente.id, p.id, x.q+1).subscribe(data =>{
            this.service.obtenerCliente(this.cliente.id).subscribe(info => this.cliente = info);
          })
          return;
        }
      }
    }
  }
  
  eraseCP(cpid:number){
    this.service.eraseCP(cpid).subscribe(data => {
      if (data) this.actualizarCliente();
    })
  }

}
