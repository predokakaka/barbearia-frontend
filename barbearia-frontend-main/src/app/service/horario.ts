import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { horario } from '../modelos/modelo.horario';
@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  constructor(private readonly http: HttpClient) {}

  getHorarios() {
    return this.http.get<horario[]>(`${environment.api}/horario`);
  }

  getHorarioById(horario_id: number) {
    return this.http.get<horario>(`${environment.api}/horario/${horario_id}`);
  }

  createHorario(horario: horario) {
    return this.http.post<horario>(`${environment.api}/horario`, horario);
  }

  updateHorario(horario_id: number, horario: horario) {
    return this.http.put<horario>(`${environment.api}/horario/${horario_id}`, horario);
  }

  deleteHorario(horario_id: number) {
    return this.http.delete<horario>(`${environment.api}/horario/${horario_id}`);
  }
}

