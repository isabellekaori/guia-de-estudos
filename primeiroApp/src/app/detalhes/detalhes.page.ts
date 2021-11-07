import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado.service';
import materiaNova from '../interfaces/materiaNova';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  public rota: ActivatedRoute;
  public id: number;
  public dados: materiaNova[];
  public materia: materiaNova;
  private servico: DadoService;

  constructor(route: ActivatedRoute, dadoServico: DadoService) {
    this.rota = route;
    this.servico = dadoServico;
    this.dados = this.servico.buscarDados();
  }

  ngOnInit() {
    this.id = Number(this.rota.snapshot.paramMap.get('id'));
    this.materia = this.dados.find(p => p.id === this.id);
  }
}
