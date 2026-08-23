import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cliente } from '../modelos/modelo.cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<Cliente[]>(`${environment.api}/cliente`);
  }

  getClienteById(cliente_id: number) {
    return this.http.get<Cliente>(`${environment.api}/cliente/${cliente_id}`);
  }

  createCliente(cliente: Cliente) {
    return this.http.post<Cliente>(`${environment.api}/cliente`, cliente);
  }

  updateCliente(cliente_id: number, cliente: Cliente) {
    // ensure we don't send cliente_id in the body to avoid accidental creates
    const { cliente_id: _id, ...payload } = cliente as any;
    return this.http.put<Cliente>(`${environment.api}/cliente/${cliente_id}`, payload);
  }

  deleteCliente(cliente_id: number) {
    return this.http.delete<Cliente>(`${environment.api}/cliente/${cliente_id}`);
  }
}
