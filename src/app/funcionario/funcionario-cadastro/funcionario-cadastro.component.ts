import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {
  obras = [
    { label: 'Odebreche', value: 1 },
    { label: 'Via1', value: 2 },
    { label: 'Via2', value: 3 }
];
  constructor() { }

  ngOnInit() {
  }

}
