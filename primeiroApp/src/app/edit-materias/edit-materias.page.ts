import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado.service';

@Component({
  selector: 'app-edit-materias',
  templateUrl: './edit-materias.page.html',
  styleUrls: ['./edit-materias.page.scss'],
})
export class EditMateriasPage  {
  public nome: string;
  public data: Date;
  public observaçao: string;
  public servico: DadoService;

  constructor(servico: DadoService) {
    this.servico = servico;
  }

  voltar(): void {
    window.history.back();
  }

  inserir(): void {
    this.servico.salvar({
      nome: this.nome,
      data: this.data,
      observacao: this.observaçao
    });

    this.voltar();

    console.log(this.servico.materias);
  }

  ngOnInit() {}

}