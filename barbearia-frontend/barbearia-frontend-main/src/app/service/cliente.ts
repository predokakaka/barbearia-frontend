import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cliente } from '../modelos/modelo.cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly http = inject(HttpClient);

  getClientes() {
    return this.http.get<Cliente[]>(`${environment.api}/cliente`);
  }

  getClienteById(cliente_id: number) {
    return this.http.get<Cliente>(`${environment.api}/cliente/${cliente_id}`);
  }

  createCliente(cliente: Cliente) {
    return this.http.post<Cliente>(`${environment.api}/cliente`, cliente);
  }

  updateCliente(cliente_id: number, cliente: Omit<Cliente, 'cliente_id'>) {
    const payload = cliente;
    return this.http.put<Cliente>(`${environment.api}/cliente/${cliente_id}`, payload);
  }

  deleteCliente(cliente_id: number) {
    return this.http.delete<Cliente>(`${environment.api}/cliente/${cliente_id}`);
  }
}
