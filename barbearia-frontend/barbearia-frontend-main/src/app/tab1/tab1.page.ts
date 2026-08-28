import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ClienteService } from '../service/cliente';
import { Cliente } from '../modelos/modelo.cliente';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  constructor() {}

  private clienteService = inject(ClienteService)
  protected clientes: Cliente[] = []

  public ionViewDidEnter(){
      this.clienteService.getClientes().subscribe({
        next: (clientes: Cliente[]) => {
          this.clientes = clientes;
          this.consolelog();
        },
        error: (err) => {
          console.error('Failed to load clientes', err);
        }
      })
    }

  public consolelog(){
    console.log(this.clientes)
  }
}
