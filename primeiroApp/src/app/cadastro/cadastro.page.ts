import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import iPessoa from '../interfaces/iPessoa';

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
  
  //pessoa = { nome:'', senha: '', switch: true};
  constructor() { 

  }
  
  loginForm(form: NgForm) {
    console.log(form);
  }

  public switch = true;
}

