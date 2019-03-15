import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { FuncionarioConsultaComponent } from './funcionario-consulta/funcionario-consulta.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioService } from '../funcionario/funcionario.service';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    CalendarModule,
    DataTableModule,
    InputTextModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    TooltipModule,
    RouterModule
    ],
  declarations: [
    FuncionarioCadastroComponent,
    FuncionarioConsultaComponent
  ],
  providers: [FuncionarioService],
  exports: [
    FuncionarioCadastroComponent,
    FuncionarioConsultaComponent
  ]
})
export class FuncionarioModule { }
