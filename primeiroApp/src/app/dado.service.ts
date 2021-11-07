import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import materiaNova from './interfaces/materiaNova';

@Injectable({
  providedIn: 'root'
})
export class DadoService {
  public materias: materiaNova[] = [];

  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
    this.storage.create().then(() => console.log('Armazenamento criado'));
    this.storage.get('temas')
      .then(temas => this.materias.push(...temas))
      .catch(() => this.storage.set('temas', this.materias));
  }

  buscarDados(): materiaNova[] {
    return this.materias;
  }

  salvar(materia: materiaNova): void {
    materia.id = this.materias.length + 1;
    this.materias.push(materia);
    this.storage.set('temas', this.materias);
  }

  deletar(indice: number): void {
    this.materias.splice(indice - 1, 1);
    this.atualizarIds();
    this.storage.set('temas', this.materias);
  }

  atualizarIds(): void {
    this.materias.forEach(materia => materia.id = this.materias.indexOf(materia) + 1);
  }
}