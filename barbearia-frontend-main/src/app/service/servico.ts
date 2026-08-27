import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { servico } from '../modelos/modelo.servico';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  constructor(private readonly http: HttpClient) {}

  getServicos() {
    return this.http.get<servico[]>(`${environment.api}/servico`);
  }

  getServicoById(servico_id: number) {
    return this.http.get<servico>(`${environment.api}/servico/${servico_id}`);
  }

  createServico(servico: servico) {
    return this.http.post<servico>(`${environment.api}/servico`, servico);
  }

  updateServico(servico_id: number, servico: servico) {
    return this.http.put<servico>(`${environment.api}/servico/${servico_id}`, servico);
  }

  deleteServico(servico_id: number) {
    return this.http.delete<servico>(`${environment.api}/servico/${servico_id}`);
  }
}