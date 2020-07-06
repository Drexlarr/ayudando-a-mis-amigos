import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Cliente } from '../../model/cliente'
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]
  selected: number;
  constructor(private service: ServicioService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.service.obtenerClientes().subscribe(data=>this.clientes = data);
  }
  Select(c: Cliente){
    this.service.obtenerClientes().subscribe(data => {
      this.clientes = data;
      for (let x of this.clientes){
        if (x.id == c.id) {
          this.messageService.sendMsg(x); 
          break;
        }
      }
    })
 
  }

}
