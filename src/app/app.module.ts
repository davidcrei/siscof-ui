
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { FuncionarioConsultaComponent } from './funcionario/funcionario-consulta/funcionario-consulta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FuncionarioCadastroComponent } from './funcionario/funcionario-cadastro/funcionario-cadastro.component';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from './funcionario/funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FuncionarioConsultaComponent,
    FuncionarioCadastroComponent 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    HttpModule,
    ToastyModule.forRoot(),
    FormsModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }