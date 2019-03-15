import { Http, Headers, URLSearchParams  } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class FuncionarioFiltro {
  nome: string;
  cpf: string;
}
export class Funcionario {
  id: number;
  cpf: string;
  nome: string;
  dataInicio: Date;
  documentoDigitalizadoId: number;
  obraId: number;
  }

@Injectable()
export class FuncionarioService {

  funcionariosUrl = 'http://localhost:8080/funcionarios';

  constructor(private http: Http) { }

  pesquisar(filtro: FuncionarioFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filtro.nome) {
      params.set('nome', filtro.nome);
      }

      if (filtro.cpf) {
      params.set('cpf', filtro.cpf);
      }

    return this.http.get(`${this.funcionariosUrl}?resumo`,
    {headers, search: params})
      .toPromise()
      .then(response => response.json());

  }

excluir(codigo: number): Promise<void> {
  const headers = new Headers();
  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  return this.http.delete(`${this.funcionariosUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
}

pesquisarPorId(codigo: number): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.funcionariosUrl}/${codigo}`, {headers })
      .toPromise()
      .then(response => {
       const funcionario = response.json() as Funcionario;
       this.converterStringsParaDatas([funcionario]);
       return funcionario;
    });

  }

  private converterStringsParaDatas(funcionarios: Funcionario[]) {
    for (const funcionario of funcionarios) {
      funcionario.dataInicio = moment(funcionario.dataInicio).toDate();
      funcionario.dataInicio = moment(funcionario.dataInicio, 'YYYY-MM-DD').toDate();
     }
  }
}
