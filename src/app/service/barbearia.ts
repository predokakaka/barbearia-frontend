import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Barbearia } from '../modelos/modelo.barbearia';

@Injectable({
  providedIn: 'root',
})
export class BarbeariaService {
  constructor(private http: HttpClient) {}

  getBarbearias() {
    return this.http.get<Barbearia[]>(`${environment.api}/barbearia`);
  }

  getBarbeariaById(barbearia_id: number) {
    return this.http.get<Barbearia>(`${environment.api}/barbearia/${barbearia_id}`);
  }

  createBarbearia(barbearia: Partial<Barbearia>) {
    return this.http.post<Barbearia>(`${environment.api}/barbearia`, barbearia);
  }

  updateBarbearia(barbearia_id: number, barbearia: Barbearia) {
    return this.http.put<Barbearia>(`${environment.api}/barbearia/${barbearia_id}`, barbearia);
  }

  deleteBarbearia(barbearia_id: number) {
    return this.http.delete<Barbearia>(`${environment.api}/barbearia/${barbearia_id}`);
  }
}
