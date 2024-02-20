import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-transaction',
  templateUrl: './pagination-transaction.component.html',
  styleUrls: ['./pagination-transaction.component.scss']
})
export class ExtraTransactionComponent implements OnInit {
  paginaAtual: number = 1;
  itensPorPagina: number = 10;
  totalItens: number = 0;
  totalPaginas: number = 0;
  transacoes: any[] = [];
  formulario: boolean = false;
  transacaoSelecionada: any = null;
  categoria: string = '';
  categorias: any[] = [];
  public urlAtualizar = "http://localhost:8080/transacao/atualiza";
  public urlBuscaTransacoes = "http://localhost:8080/transacao";
  public urlTransacao = 'http://localhost:8080/transacao';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarTransacoes();
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

  atualizarTransacao(transacao: any): void{
    this.formulario = true;
    this.transacaoSelecionada = {
      id: transacao.id,
      valor: transacao.valor,
      data: transacao.data,
      categoria: { id: Number(transacao.categoria.id) },
      username: { id: Number(transacao.username.id) }
    };
    console.log(this.transacaoSelecionada);
  }

  confirmarAtualizacao(): void {
    
    console.log(this.transacaoSelecionada);
    this.http.post(this.urlAtualizar, this.transacaoSelecionada).subscribe((response) => {
      console.log('Transação atualizada com sucesso!', response);
      alert('Transação atualizada com sucesso!');
      this.formulario = false;
      this.buscarTransacoes();
    }, (error) => {
        console.error('Erro ao atualizar a transação:', error);
        alert('Erro ao atualizar a transação. Verifique o console para mais informações.');
        console.log('Resposta do servidor:', error.error);
        this.formulario = false;
    })
  }

  deletarTransacao(id: number): void{
    const urlDeletarPorId = `http://localhost:8080/transacao?id=${id}`; 

    if(confirm(`Tem certeza que deseja excluir a transação com ID ${id}?`)){
      this.http.delete(urlDeletarPorId).subscribe((response) => {
          console.log(`Transação com ID ${id} excluída com sucesso!`, response);
          alert(`Transação com ID ${id} excluída com sucesso!`);
          this.buscarTransacoes();
      }, (error) => {
          console.error(`Erro ao excluir a transação com ID ${id}:`, error);
          alert(`Erro ao excluir a transação com ID ${id}. Verifique o console para mais informações.`);
      });
    }
  }

  deletarTodasAsTransacoes(): void{
    const urlDeletarTudo = "http://localhost:8080/transacao/apagartudo";
    if(confirm('Tem certeza que deseja excluir todas as transações?')){
      this.http.delete(urlDeletarTudo).subscribe((response) => {
          console.log('Todas as transações foram excluídas com sucesso!', response);
          alert('Todas as transações foram excluídas com sucesso!');
          this.buscarTransacoes();
      }, (error) => {
          console.error('Erro ao excluir todas as transações:', error);
          alert('Erro ao excluir todas as transações. Verifique o console para mais informações.');
      });
    }
  }


  buscarTransacoes(): void {
    const url = `${this.urlTransacao}?pagina=${this.paginaAtual}&itensPorPagina=${this.itensPorPagina}`;
    
    this.http.get(url).subscribe((response: any) => {
      this.transacoes = response.content;
      this.totalItens = response.totalElements;
      this.totalPaginas = response.totalPages;
    }, (error) => {
      console.error('Erro ao buscar transações: ', error);
    });
  }
  
  anteriorPagina(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.buscarTransacoes();
    }
  }
  
  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.buscarTransacoes();
    }
  }
}

