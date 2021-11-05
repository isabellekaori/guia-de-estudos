import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import materiaNova from './interfaces/materiaNova';
@Injectable({
  providedIn: 'root'
})
export class DadosService {
  public materias: materiaNova[] = [
    // { id: 1, nome: 'José Netto', telefone: '(11) 98800-0000', detalhes: 'Trabalho' },
    // { id: 2, nome: 'Alice', telefone: '(11) 99600-0000', detalhes: 'Casa' },
    // { id: 3, nome: 'Yuri', telefone: '(11) 98600-0000', detalhes: 'Escola' }
  ];

  private storage: Storage;

  /*Este construtor recebe um storage por injeção de dependências, cria o armaazenamento e
  e recupera os dados de armazenamentos já existentes. Caso não haja armazenamento prévio,
  ocorrerá um erro que será tratado pola função "catch" que criará o storage.*/
  constructor(storage: Storage) {
    this.storage = storage;
    this.storage.create().then(() => console.log('Armazenamento criado'));
    this.storage.get('temas')
      .then(contatos => this.materias.push(...contatos))
      .catch(() => this.storage.set('temas', this.materias));
  }

  //Retorna os dados do array.
  buscarDados(): materiaNova[] {
    return this.materias;
  }

  //Persiste os dados no storage.
  salvar(materia: materiaNova): void {
    materia.id = this.materias.length + 1;
    this.materias.push(materia);
    this.storage.set('temas', this.materias);
  }

  //Remove os contatos e persiste.
  deletar(indice: number): void {
    this.materias.splice(indice - 1, 1);
    this.atualizarIds();
    this.storage.set('contatos', this.materias);
  }

  /*Atualiza os ids dos contatos para simular os IDS dinâmicos dos bancos de dados.*/
  atualizarIds(): void {
    this.materias.forEach(materia => materia.id = this.materias.indexOf(materia) + 1);

    // for(const pessoa of this.pessoas) {
    //   pessoa.id = this.pessoas.indexOf(pessoa);
    // }
  }

}
