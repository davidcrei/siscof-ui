import { FuncionarioConsultaComponent } from './funcionario/funcionario-consulta/funcionario-consulta.component';
import { FuncionarioCadastroComponent } from './funcionario/funcionario-cadastro/funcionario-cadastro.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [
 { path: 'funcionarios', component: FuncionarioConsultaComponent },
 { path: 'funcionarios/novo', component: FuncionarioCadastroComponent },
 { path: 'funcionarios/:id', component: FuncionarioCadastroComponent }
];

@NgModule({
  imports: [
     RouterModule.forRoot(rotas),
     RouterModule
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
