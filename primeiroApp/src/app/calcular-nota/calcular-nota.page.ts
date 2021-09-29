import { Component, OnInit } from '@angular/core';

/*Interface criada para modelar o arry "lista", usado na aplicação criada
para listar tarefas. Este array armazena as tarefas e sua prorpriedade
"length" (compriemento) preenche/atualiza a propriedade "tarefasTotais".*/
interface IMateria {
  nome: string;
  nota: number;
  concluido: boolean;
}

@Component({
  selector: 'app-calcular-nota',
  templateUrl: './calcular-nota.page.html',
  styleUrls: ['./calcular-nota.page.scss'],
})
export class CalcularNotaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*Esta propriedade, juntamente com "input", "tarefasConcluidas" e "tarefasTotais";
  foram usadas na aplicação de listagem de tarefas.*/
  public lista: IMateria[] = [];

  public input = '';

  public inputNota = '';

  public materiasTotais = 0;

  public materiasConcluidas = 0;


  public nota = 10;

  inserir(materia: string, nota: number): void {
    if (materia === '' && nota === null) {
      return;
    }

    const novaTarefa: IMateria = {
      nome: materia,
      nota: nota,
      concluido: false
    };

    this.lista.push(novaTarefa);
    this.input = '';
    this.inputNota = '';
    this.materiasTotais = this.lista.length;
    }

    concluir(): void {

    const concluidas = this.lista.filter(t => t.concluido === true);
    this.materiasConcluidas = concluidas.length;
        
  }

}