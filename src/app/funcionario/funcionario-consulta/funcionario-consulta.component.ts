import { Component, OnInit, ViewChild } from '@angular/core';
import { FuncionarioService } from './../funcionario.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-funcionario-consulta',
  templateUrl: './funcionario-consulta.component.html',
  styleUrls: ['./funcionario-consulta.component.css']
})
export class FuncionarioConsultaComponent implements OnInit {
   
  nome: string;
  funcionarios = [];
  @ViewChild('tabela') grid;
  
  constructor(
    private funcionarioService: FuncionarioService,
    private toasty:ToastyService
  ) {}

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar() {
    this.funcionarioService.pesquisar({nome:this.nome})
      .then(funcionarios => this.funcionarios = funcionarios);
}
  
excluir(funcionario: any) {
  this.funcionarioService.excluir(funcionario.id)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }

     this.toasty.success('Funcionario excluido com sucesso');
});
}
}
