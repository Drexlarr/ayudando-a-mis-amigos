import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  constructor(private service: ServicioService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
