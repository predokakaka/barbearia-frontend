import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Barbeiro } from '../modelos/modelo.barbeiro';

@Injectable({
  providedIn: 'root',
})
export class BarbeiroService {
  private readonly http = inject(HttpClient);

  getBarbeiros() {
    return this.http.get<Barbeiro[]>(`${environment.api}/barbeiro`);
  }

  getBarbeiroById(id_barbeiro: number) {
    return this.http.get<Barbeiro>(`${environment.api}/barbeiro/${id_barbeiro}`);
  }

  createBarbeiro(barbeiro: Barbeiro) {
    return this.http.post<Barbeiro>(`${environment.api}/barbeiro`, barbeiro);
  }

  updateBarbeiro(id_barbeiro: number, barbeiro: Barbeiro) {
    return this.http.put<Barbeiro>(`${environment.api}/barbeiro/${id_barbeiro}`, barbeiro);
  }

  deleteBarbeiro(id_barbeiro: number) {
    return this.http.delete<Barbeiro>(`${environment.api}/barbeiro/${id_barbeiro}`);
  }

}
