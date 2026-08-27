import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { ClienteService } from '../service/cliente';
import { Cliente } from '../modelos/modelo.cliente';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class TestPage {
  private clienteService = inject(ClienteService);

  public clientes: Cliente[] = [];
  public result: any = null;
  public idInput: number | null = null;
  public form: Cliente = { nome: '', email: '', senha: '', celular: '' } as Cliente;

  public getAll(): void {
    this.clienteService.getClientes().subscribe({
      next: (res: Cliente[]) => {
        this.clientes = res || [];
        this.result = this.clientes;
      },
      error: (err) => (this.result = err),
    });
  }

  public getById(): void {
    const id = Number(this.idInput);
    if (!id || Number.isNaN(id)) { this.result = 'Informe um id válido'; return; }
    this.clienteService.getClienteById(id).subscribe({
      next: (res) => (this.result = res),
      error: (err) => (this.result = err),
    });
  }

  public create(): void {
    this.clienteService.createCliente(this.form).subscribe({
      next: (res: any) => {
        this.result = res;
        const newId = res?.cliente_id || res?.id || res?.insertId || null;
        if (newId) this.idInput = Number(newId);
        if (res && typeof res === 'object') this.form = { ...this.form, ...(res as any) } as Cliente;
        this.getAll();
      },
      error: (err) => (this.result = err),
    });
  }

  public update(): void {
    const id = Number(this.idInput);
    if (!id || Number.isNaN(id)) { this.result = 'Informe um id válido'; return; }
    this.clienteService.updateCliente(id, this.form).subscribe({
      next: (res) => {
        this.result = res;
        this.getAll();
      },
      error: (err) => (this.result = err),
    });
  }

  public delete(): void {
    const id = Number(this.idInput);
    if (!id || Number.isNaN(id)) { this.result = 'Informe um id válido'; return; }
    console.log('TestPage delete id=', id);
    this.clienteService.deleteCliente(id).subscribe({
      next: (res) => {
        this.result = res;
        this.getAll();
      },
      error: (err) => (this.result = err),
    });
  }
}
