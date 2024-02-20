import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-function-transaction',
  templateUrl: './function-transaction.component.html',
  styleUrls: ['./function-transaction.component.scss']
})
export class FunctionTransactionComponent implements OnInit {
  transacoes: any[] = [];
  formulario: boolean = false;
  categoriaSoma: number | string = '';
  userId: number | null = null;
  somaTotal: number | null = null;
  categoria: string = '';
  categorias: any[] = [];
  public urlAtualizar = "http://localhost:8080/transacao/atualiza";
  public urlBuscaTransacoes = "http://localhost:8080/transacao";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.http.get<any[]>('http://localhost:8080/categoria').subscribe(
      (response: any[]) => {
        this.categorias = response;
      },
      (error: any) => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

  somarTransacoesPorCategoriaEUsuarioId() {
    if (!this.categoriaSoma || !this.userId) {
      alert("Selecione uma categoria e informe o ID do usuário");
      return;
    }

    this.http.get(`http://localhost:8080/transacao/somartransacoes?id=${this.categoriaSoma}&userid=${this.userId}`)
      .subscribe((response: any) => {
        this.somaTotal = response;
        console.log(`Soma das transações para a categoria ${this.categoriaSoma} do usuário ${this.userId}: ${this.somaTotal}`);
      }, (error) => {
        console.error('Erro ao calcular a soma:', error);
        alert('Erro ao calcular a soma. Verifique o console para mais informações.');
      });
  }
}
