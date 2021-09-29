import { Component } from '@angular/core';

interface IPessoa{
  nome: string;
  sobrenome: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public texto = "Boa noite";

}
