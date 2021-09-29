import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class CadastroPage {
  data = { username:'', password: '', switch: true};
  constructor() { }
  
  loginForm(form: NgForm) {
    console.log(form);
  }

  public switch = true;
}

