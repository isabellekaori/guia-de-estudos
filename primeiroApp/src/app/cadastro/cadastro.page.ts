import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import iPessoa from '../interfaces/iPessoa';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class CadastroPage {
  public rota: ActivatedRoute;
  public id: number;
  public dados: iPessoa[];
  public pessoa: iPessoa;
  private service: DadosService;
  
  //pessoa = { nome:'', senha: '', switch: true};
  constructor(route: ActivatedRoute, dadosService: DadosService) { 
    this.rota = route;
    this.service = dadosService;
  }
  
  loginForm(form: NgForm) {
    console.log(form);
  }

  public switch = true;
}

