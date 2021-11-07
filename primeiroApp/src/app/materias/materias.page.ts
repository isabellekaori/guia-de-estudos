import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado.service';
import materiaNova from '../interfaces/materiaNova';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage  {
  public dados: materiaNova[];
  private servico: DadoService;

  constructor(dadosServico: DadoService) {
    this.servico = dadosServico;
    this.dados = this.servico.buscarDados();
  }

  remover(indice: number): void {
    this.servico.deletar(indice);
    console.log(this.servico.materias);
  }
}
