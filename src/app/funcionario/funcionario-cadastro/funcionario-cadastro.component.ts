import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService, Funcionario } from './../funcionario.service';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {
 funcionario = new Funcionario();
  obras = [
    { label: 'Odebreche', value: 1 },
    { label: 'Via1', value: 2 },
    { label: 'Via2', value: 3 }
];
  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private toasty: ToastyService
    ) {
    }

  ngOnInit() {
    const idFuncionario = this.route.snapshot.params['id'];
    if (idFuncionario) {
      this.carregarFuncionario(idFuncionario);
    }
  }

  carregarFuncionario(id: number) {
    this.funcionarioService.pesquisarPorId(id)
    .then(funcionario => {
      this.funcionario = funcionario;
    });

  }

  salvar(form: FormControl){
    this.funcionarioService.adicionar(this.funcionario)
    .then(() =>{
      this.toasty.success('Funcionario adicionado com sucesso');

      form.reset;
      this.funcionario = new Funcionario();
    })

    }

}
