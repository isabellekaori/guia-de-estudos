import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DadosService } from '../dados.service';
import materiaNova from '../interfaces/materiaNova';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  {
  public dados: materiaNova[];
  private servico: DadosService;
  dadosServico: DadosService;

  constructor(dadosServico: DadosService) {
    this.servico = this.dadosServico;
    this.dados = this.servico.buscarDados();
   }
   
  remover(indice: number): void {
    this.servico.deletar(indice);
    console.log(this.servico.materias);
  }
}
