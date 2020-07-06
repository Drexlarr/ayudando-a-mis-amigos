import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './model/cliente';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
import { Producto } from './model/producto';


@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<any> {
    return this.http.get(this.urlBase + "/listarClientes").pipe(map(response => response as Cliente[]));
  }
  obtenerCliente(id:number): Observable<any>{
    return this.http.get(this.urlBase + "/cliente/" + id.toString()).pipe(map(response => response as Cliente));   
  }
  obtenerProductos(): Observable<any> {
    return this.http.get(this.urlBase + "/listarProductos").pipe(map(response => response as Producto[]));
  }
  obtenerProducto(id:number): Observable<any>{
    return this.http.get(this.urlBase + "/producto/" + id.toString()).pipe(map(response => response as Producto));   
  }
  registrarCliente(c: Cliente) {
    return this.http.post(this.urlBase + "/cliente/registrar", c, {headers: this.httpHeaders}).subscribe(r=>{});
  }
  registrarProducto(p: Producto){
    return this.http.post(this.urlBase + "/producto/registrar", p, {headers: this.httpHeaders}).subscribe(r=>{});
  }
  registrarCP(cid:number, pid:number){
    return this.http.post(this.urlBase + "/cps/registrar/" + cid + "/" + pid, {headers: this.httpHeaders});
  }
  actualizarCP(cid:number, pid:number, q:number){
    return this.http.put(this.urlBase + "/cps/actualizar/"+cid+"/"+pid+"/"+q, {headers: this.httpHeaders});
  }
  eraseCP(cpid:number): Observable<any>{
    return this.http.delete(this.urlBase + "/cps/eliminar/" + cpid, {headers: this.httpHeaders}).pipe(map(response => response as Boolean));
  }
}
