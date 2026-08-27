import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { agendamento } from '../modelos/modelo.agendamento';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  constructor(private readonly http: HttpClient) {}

  getAgendamentos() {
    return this.http.get<agendamento[]>(`${environment.api}/agendamento`);
  }

  getAgendamentoById(agendamento_id: number) {
    return this.http.get<agendamento>(`${environment.api}/agendamento/${agendamento_id}`);
  }

  createAgendamento(agendamento: agendamento) {
    return this.http.post<agendamento>(`${environment.api}/agendamento`, agendamento);
  }

  updateAgendamento(agendamento_id: number, agendamento: agendamento) {
    return this.http.put<agendamento>(`${environment.api}/agendamento/${agendamento_id}`, agendamento);
  }

  deleteAgendamento(agendamento_id: number) {
    return this.http.delete<agendamento>(`${environment.api}/agendamento/${agendamento_id}`);
  }
}