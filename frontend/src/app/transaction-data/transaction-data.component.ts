import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transaction-data',
  templateUrl: './transaction-data.component.html',
  styleUrls: ['./transaction-data.component.scss']
})
export class TransactionDataComponent implements OnInit {
  valor: number | null = null;
  data: Date | null = null;
  categoria: string = '';
  username: string = '';
  valorTransacaoLote: number[] = [0, 0, 0, 0, 0];
  dataLote: (Date | null)[] = [null, null, null, null, null];
  categoriaLote: string[] = ['', '', '', '', ''];
  usernameLote: string[] = ['', '', '', '', ''];
  transacoes: any[] = [];
  linhasTransacao: any[] = [
    { valor: null, data: null, categoria: '', username: '' },
    { valor: null, data: null, categoria: '', username: '' },
    { valor: null, data: null, categoria: '', username: '' },
    { valor: null, data: null, categoria: '', username: '' },
    { valor: null, data: null, categoria: '', username: '' }
  ];

  categorias: any[] = []; // Adicionando array para armazenar categorias
  public urlTransacao = 'http://localhost:8080/transacao';
  public urlBuscarCategoria = 'http://localhost:8080/categoria';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCategorias(); // Chame a função getCategorias ao iniciar o componente
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

  salvarTransacao(parametro: "unico" | "lote"): void {
    if (parametro === "unico"){
      this.salvarTransacaoUnica();
    } else if (parametro === "lote"){
      this.salvarTransacaoLote();
    } else{
      console.error("Parâmetro inválido: ", parametro)
    }
  };

  private salvarTransacaoUnica(): void {
    if(!this.categoria){
      alert('Por favor selecione uma categoria');
      return;
    }

    const novaTransacao = {
      valor: this.valor,
      data: this.data,
      categoria: { id: Number(this.categoria) },
      username: { id: Number(this.username) },
    };

    this.transacoes.push({...novaTransacao});

    this.http.post(this.urlTransacao, this.transacoes).subscribe((response) => {
      console.log('Dados salvos com sucesso!', response);
      alert('Dados salvos com sucesso');

      this.valor = 0;
      this.data = null;
      this.categoria = '';
      this.username = '';
      this.transacoes = [];

    }, (error) => {
      console.error('Erro ao salvar os dados: ', error);
      alert('Erro ao salvar os dados. Verifique o console.para mais informações.');
    });
  }

  private salvarTransacaoLote(): void{
    if (!this.categoriaLote){
      alert('Por favor, selecione uma categoria');
      return;
    }

    const transacoesEmMassa = this.linhasTransacao.filter((valor) => valor.categoria !== "").map((linha) => ({
      valor: linha.valor,
      data: linha.data,
      categoria: { id: Number(linha.categoria) },
      username: { id: Number(linha.username)}
    }));

    this.http.post(this.urlTransacao, transacoesEmMassa).subscribe((response) => {
      console.log(response);
      alert('Dados salvos com sucesso!');
      this.limparCampos('lote');

    }, (error) => {
      alert('Error ao salvar os dados. Verifique o console para mais informações.' + error);
      console.log('Erro detalhado:', error.error);
      console.log('Corpo da solicitação:', transacoesEmMassa);
    });
  }

  limparCampos(tipo: 'unico' | 'lote'): void {
    if (tipo === 'unico') {
      this.valor = null;
      this.data = null;
      this.categoria = '';
      this.username = '';
    } else if (tipo === 'lote') {
      this.linhasTransacao.forEach(linha => {
        linha.valor = null;
        linha.data = null;
        linha.categoria = '';
        linha.username = '';
      });
    }
  }
  
}